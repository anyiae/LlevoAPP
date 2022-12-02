import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor() { }
  getDataEuro<T>() {
    const url = 'https://mindicador.cl/api/euro/2022';
    return fetch(url).then(res => res.json());
  }
  getDataDolar<T>() {
    const url = 'https://mindicador.cl/api/dolar/2022';
    return fetch(url).then(res => res.json());
  }
}
