import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { profileRoutes } from './profile/profile.routes';
import { anunciosRouter } from './anuncios/anuncios.routes';
import GeralLayoutComponent from './layout/geral.layout.component';
import { LoginService } from './auth/services/login.service';

export const routes: Routes = [
    { path: '', component: GeralLayoutComponent, children: [
        { path: 'auth', children: authRoutes },
        { path: 'profile', canMatch: [LoginService.canMatch], children: profileRoutes },
        { path: 'anuncios', children: anunciosRouter },
        { path: '**', redirectTo: '/anuncios' }
    ]}
];
