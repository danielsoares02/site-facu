import { Routes } from "@angular/router";

export const profileRoutes: Routes = [
    {
        path: '', loadComponent: () => import('./layout/profile.layout.component'), children: [
            { path: 'meus-dados', loadComponent: () => import('./meus-dados/meus-dados.component') },
            { path: 'meus-anuncios', loadComponent: () => import('./meus-anuncios/meus-anuncios.component') },
            { path: 'meus-anuncios/:id', loadComponent: () => import('./meus-anuncios/cadastro-anuncio/cadastro-anuncio.component') },
            { path: '**', redirectTo: 'meus-anuncios' }
        ]
    }
]