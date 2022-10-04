import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoicGVkcm9tZXJlbGVzIiwiYSI6ImNsNmxnc2JteTA0cjkzbG85ZXl2bXhvcXQifQ.mE4ryBIzW0uEc8ZP50CTZg';



if(!navigator.geolocation){

  alert('El navegador no soporta la Geolocalizacion!');
  throw new Error('El navegador no soporta la Geolocalizacion!');

}





if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
