// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  production: false,

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig: {
    apiKey: "AIzaSyDEjZYCScajJ3c54721fXuxbkbmHqqShjQ",
    authDomain: "tellevoapp-fcac4.firebaseapp.com",
    projectId: "tellevoapp-fcac4",
    storageBucket: "tellevoapp-fcac4.appspot.com",
    messagingSenderId: "391993192244",
    appId: "1:391993192244:web:864fde2df59c4ebdf8ff61",
    measurementId: "G-PL4L18N621"
  }


};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
