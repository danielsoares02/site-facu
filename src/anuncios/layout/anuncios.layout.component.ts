import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AnuncioFiltroService } from '../anuncio-list/services/anuncio-filtro.service';

@Component({
    selector: 'app-profile.layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './anuncios.layout.component.html',
    styleUrl: './anuncios.layout.component.css'
})
export default class AnunciosLayoutComponent {
    anuncioFiltro = inject(AnuncioFiltroService);

    search(pesquisa: string) {
        this.anuncioFiltro.pesquisaChanged.emit(pesquisa);
    }
}
