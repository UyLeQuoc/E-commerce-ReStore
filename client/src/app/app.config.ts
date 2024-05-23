import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { ErrorInterceptor } from './http-interceptor/ErrorInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(), provideHttpClient(
    withInterceptors([ErrorInterceptor])
  ), provideAnimations(),
]
};
