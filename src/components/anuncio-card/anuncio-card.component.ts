import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AnuncioModel } from '../../api/api-anuncios.service';

@Component({
    selector: 'app-anuncio-card',
    standalone: true,
    imports: [],
    templateUrl: './anuncio-card.component.html',
    styleUrl: './anuncio-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnuncioCardComponent {
    anuncio = input.required<AnuncioModel>()
}
