import { Component, inject } from '@angular/core';
import { AnuncioCardComponent } from '../../components/anuncio-card/anuncio-card.component';
import { AnuncioFiltroService } from './services/anuncio-filtro.service';

@Component({
    selector: 'app-anuncio-list',
    standalone: true,
    imports: [AnuncioCardComponent],
    templateUrl: './anuncio-list.component.html',
    styleUrl: './anuncio-list.component.css'
})
export default class AnuncioListComponent {
    anuncioFiltro = inject(AnuncioFiltroService);

    constructor() {
        this.anuncioFiltro.pesquisaChanged.subscribe(
            pesquisa => {
                console.log(pesquisa);
            }
        );
    }
}
