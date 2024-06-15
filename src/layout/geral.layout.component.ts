import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../auth/services/login.service';

@Component({
    selector: 'app-profile.layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './geral.layout.component.html',
    styleUrl: './geral.layout.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class GeralLayoutComponent {
    loginService = inject(LoginService);
    router = inject(Router);

    search(pesquisa: string) {
        this.router.navigate(['/anuncios'], { queryParams: { pesquisa } });
    }

    profileClick() {
        if (this.loginService.isLogged()) {
            this.router.navigateByUrl('/profile');
        } else {
            this.router.navigateByUrl('/auth/login');
        }
    }
}
