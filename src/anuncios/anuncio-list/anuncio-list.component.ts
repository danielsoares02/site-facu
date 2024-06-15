import { ChangeDetectionStrategy, Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { AnuncioCardComponent } from '../../components/anuncio-card/anuncio-card.component';
import { AnuncioModel, ApiAnunciosService } from '../../api/api-anuncios.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-anuncio-list',
    standalone: true,
    imports: [AnuncioCardComponent, RouterLink],
    templateUrl: './anuncio-list.component.html',
    styleUrl: './anuncio-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AnuncioListComponent implements OnInit {
    anuncioService = inject(ApiAnunciosService);

    router = inject(ActivatedRoute);
    anuncioList = signal(new Array<AnuncioModel>());

    currentSearch = "";

    constructor() {
        this.currentSearch = this.router.snapshot.queryParamMap.get('pesquisa') ?? "";

        this.router.queryParamMap.subscribe(
            async query => {
                this.currentSearch = query.get('pesquisa') ?? "";
                await this.pesquisar()
            }
        );
    }

    async ngOnInit() {
        await this.pesquisar()
    }
    
    async pesquisar() {
        this.anuncioList.set(await this.anuncioService.getAnuncios(this.currentSearch));
    }
}
