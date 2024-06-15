import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [provideExperimentalZonelessChangeDetection(), provideRouter(routes, withComponentInputBinding())]
})
    .catch((err) => console.error(err));
