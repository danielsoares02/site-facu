import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { profileRoutes } from './profile/profile.routes';
import { anunciosRouter } from './anuncios/anuncios.routes';

export const routes: Routes = [
    { path: 'auth', children: authRoutes },
    { path: 'profile', children: profileRoutes },
    { path: 'anuncios', children: anunciosRouter },
    { path: '**', redirectTo: '/anuncios' }
];
