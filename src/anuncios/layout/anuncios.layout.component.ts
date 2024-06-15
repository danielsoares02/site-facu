import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-profile.layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './anuncios.layout.component.html',
    styleUrl: './anuncios.layout.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AnunciosLayoutComponent {
    router = inject(Router);
}
