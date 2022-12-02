// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  firebase: {
    projectId: 'tellevo-firebase-auth',
    appId: '1:131875633826:web:ae7f79d49e8b9609a9f5fb',
    storageBucket: 'tellevo-firebase-auth.appspot.com',
    apiKey: 'AIzaSyAEvEMOXz8mLnnZ15OXcc0IPZTBWQ7b6G4',
    authDomain: 'tellevo-firebase-auth.firebaseapp.com',
    messagingSenderId: '131875633826',
    measurementId: 'G-WFKQRQ0L5C',
  },
  production: false,

  API_KEY: '7eaaff8fc1bdd20dec54dd77f7aed69d',
  API_URL: 'https://api.openweathermap.org/data/2.5/'


};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
