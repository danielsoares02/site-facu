import { Routes } from "@angular/router";

export const authRoutes: Routes = [
    { path: 'cadastro', loadComponent: () => import('./cadastro/cadastro.component') },
    { path: 'login', loadComponent: () => import('./login/login.component') }
]