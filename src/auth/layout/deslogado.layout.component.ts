import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-deslogado.layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './deslogado.layout.component.html',
    styleUrl: './deslogado.layout.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeslogadoLayoutComponent {

}
