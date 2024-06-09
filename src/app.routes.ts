import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { DeslogadoLayoutComponent } from './layouts/deslogado.layout/deslogado.layout.component';

export const routes: Routes = [
    { path: 'auth', component: DeslogadoLayoutComponent, children: authRoutes }
];
