import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideRouter, withHashLocation} from '@angular/router';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()), // Keep withHashLocation for GitHub Pages
    provideClientHydration(),
    provideHttpClient(),
  ],
};