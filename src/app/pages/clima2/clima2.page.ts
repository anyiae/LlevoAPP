import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_ULR = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-clima2',
  templateUrl: './clima2.page.html',
  styleUrls: ['./clima2.page.scss'],
})
export class Clima2Page {

  todayDay = new Date()
  weatherTemp: any
  weatherDetails: any
  icon: any
  constructor(public httpClient: HttpClient) {
    this.loadData()
  }

  loadData() {
    this.httpClient.get(`${API_ULR}/weather?q=${"Pretoria"}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      this.weatherTemp = results['main']
      console.log(this.weatherTemp);
      this.weatherDetails = results['weather'][0]
      console.log(this.weatherDetails);
      this.icon = "https://openweathermap.org/img/wn/" + this.weatherDetails.icon + "@4x.png"
    }

    )
  }

  loader() {

  }
}
