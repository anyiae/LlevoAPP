import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeoCoder from '@mapbox/mapbox-gl-geocoder';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class ViajarService {

  cbAddress: EventEmitter<any> = new EventEmitter<any>();
  
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.map;
  style = 'mapbox://styles/mapbox/streets-v12';
  lat = -33.450204590828285;
  lng= -70.67236799506149;
  zoom = 10;
  wayPoints: Array<any> = [];
  markerDriver: any = null;


  constructor(private httpClient: HttpClient, private socket: Socket) {
    this.mapbox.accessToken = environment.mapPk;
  }

  buildMap(): Promise<any> {

    return new Promise((resolve, reject) => {
      try {
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: this.zoom,
          center: [this.lng, this.lat]
        });


        const geocoder = new MapboxGeoCoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl
        });

        geocoder.on('result', ($event) => {
          const {result} = $event;
          geocoder.clear();
          console.log('*********', result)
          this.cbAddress.emit(result);
        })

        resolve({
          map: this.map,
          geocoder
        });

      } catch (e) {
        reject(e);
      }
    });
  }

  loadCoords(coords): void {

    const url = [
      `https://api.mapbox.com/directions/v5/mapbox/driving/`,
      `${coords[0][0]},${coords[0][1]};${coords[1][0]},${coords[1][1]}`,
      `?steps=true&geometries=geojson&access_token=${environment.mapPk}`,
    ].join('');

    this.httpClient.get(url).subscribe((res: any) => {


      const data = res.routes[0];
      const route = data.geometry.coordinates;

      this.map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        }
      });

      this.map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': 'red',
          'line-width': 5
        }
      });
      this.wayPoints = route;
      this.map.fitBounds([route[0], route[route.length - 1]], {
        padding: 100
      })
      this.socket.emit('find-driver', {points: route});

    });


  }

  addMarkerCustom(coords): void {
    console.log('----->', coords)
    const el = document.createElement('div');
    el.className = 'marker';
    if (!this.markerDriver) {
      this.markerDriver = new mapboxgl.Marker(el);
    } else {
      this.markerDriver
        .setLngLat(coords)
        .addTo(this.map);
    }
  }
}
