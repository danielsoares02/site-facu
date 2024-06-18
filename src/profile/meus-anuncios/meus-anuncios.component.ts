import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AnuncioCardComponent } from '../../components/anuncio-card/anuncio-card.component';
import { ApiAnunciosService, AnuncioModel } from '../../api/api-anuncios.service';

@Component({
    selector: 'app-meus-anuncios',
    standalone: true,
    imports: [AnuncioCardComponent, RouterLink],
    templateUrl: './meus-anuncios.component.html',
    styleUrl: './meus-anuncios.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MeusAnunciosComponent implements OnInit {
    meusAnunciosList = signal(new Array<AnuncioModel>());

    anuncioService = inject(ApiAnunciosService);

    async ngOnInit() {
        this.meusAnunciosList.set(await this.anuncioService.getMeusAnuncios());
    }
}
