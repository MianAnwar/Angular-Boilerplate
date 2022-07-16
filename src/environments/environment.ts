// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  usemock: true,
  BASE_URL_ONFIDO: 'https://api.us.onfido.com/v3/',
  APP_STORE_URL: 'https://apps.apple.com/fj/app/mycash-digicel/id1531250064',
  BASE_URL: 'https://dev.mc.mycashfs.com:8243/',
  firebase: {
    apiKey: 'AIzaSyAGiqZS3K5nekdBgk1XuP356cmBsI5DTLs',
    authDomain: 'prism-holdings.firebaseapp.com',
    projectId: 'prism-holdings',
    storageBucket: 'prism-holdings.appspot.com',
    messagingSenderId: '578357807965',
    appId: '1:578357807965:web:cbe691c6661809082376b4',
    measurementId: 'G-LCEGRXT8MG',
  },
  vapidKey:
    'BAcrMoNBeNrfJQu-MLzGnSi42TuNuMvyc6vpvcAPKmnuGbbb1LFp-LqOmZDbRnsOhxtbHquyPyAOtQaum6MEdq0',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
