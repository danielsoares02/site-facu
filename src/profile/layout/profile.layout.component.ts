import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../../auth/services/login.service';
import { UsuarioModel } from '../../api/api-usuario.service';

@Component({
    selector: 'app-profile.layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './profile.layout.component.html',
    styleUrl: './profile.layout.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProfileLayoutComponent {
    loginService = inject(LoginService)
    router = inject(Router);
    usuario = signal(this.loginService.usuarioLogado())

    async sair() {
        this.loginService.logout();
        this.router.navigateByUrl('/auth/login');
    }

}
