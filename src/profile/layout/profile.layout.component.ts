import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../../auth/services/login.service';

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

    async sair() {
        this.loginService.logout();
        this.router.navigateByUrl('/auth/login');
    }

}
