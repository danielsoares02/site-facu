import { Routes } from "@angular/router";
import { LoginService } from "../auth/services/login.service";

export const profileRoutes: Routes = [
    {
        path: '', loadComponent: () => import('./layout/profile.layout.component'), children: [
            { path: 'meus-anuncios', loadComponent: () => import('./meus-anuncios/meus-anuncios.component') },
            { path: 'meus-anuncios/novo-anuncio', loadComponent: () => import('./meus-anuncios/novo-anuncio/novo-anuncio.component') }
        ]
    }
]