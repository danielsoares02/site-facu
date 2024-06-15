import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
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
    anuncioService = inject(ApiAnunciosService);
    meusAnunciosList = signal(new Array<AnuncioModel>());

    async ngOnInit() {
        this.meusAnunciosList.set(await this.anuncioService.getMeusAnuncios());
    }

}
