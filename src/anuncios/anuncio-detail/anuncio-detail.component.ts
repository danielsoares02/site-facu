import { ChangeDetectionStrategy, Component, inject, Input, input, numberAttribute, OnInit, signal } from '@angular/core';
import { AnuncioModel, ApiAnunciosService } from '../../api/api-anuncios.service';
import { ApiUsuarioService, UsuarioModel } from '../../api/api-usuario.service';

@Component({
    selector: 'app-anuncio-detail',
    standalone: true,
    imports: [],
    templateUrl: './anuncio-detail.component.html',
    styleUrl: './anuncio-detail.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AnuncioDetailComponent implements OnInit{
    @Input({transform: numberAttribute})
    anuncioId = 0;

    anuncioService = inject(ApiAnunciosService);
    usuarioService = inject(ApiUsuarioService);
    
    anuncio = signal<AnuncioModel | undefined>(undefined)
    usuario = signal<UsuarioModel | undefined>(undefined)
    
    async ngOnInit() {
        this.anuncio.set(await this.anuncioService.getAnuncio(this.anuncioId));
        this.usuario.set(await this.usuarioService.getUsuario(this.anuncio()!.anunciante));
    }
}
