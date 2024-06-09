import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnuncioCardComponent } from '../../components/anuncio-card/anuncio-card.component';

@Component({
    selector: 'app-meus-anuncios',
    standalone: true,
    imports: [AnuncioCardComponent, RouterLink],
    templateUrl: './meus-anuncios.component.html',
    styleUrl: './meus-anuncios.component.css'
})
export default class MeusAnunciosComponent {

}
