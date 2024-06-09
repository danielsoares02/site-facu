import { Routes } from "@angular/router";

export const anunciosRouter: Routes = [
    {
        path: '', loadComponent: () => import('./layout/anuncios.layout.component'), children: [
            { path: '', loadComponent: () => import('./anuncio-list/anuncio-list.component') },
            { path: 'detail', loadComponent: () => import('./anuncio-detail/anuncio-detail.component') },
        ]
    },
];