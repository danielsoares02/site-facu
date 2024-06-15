import { ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, UrlSegment } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LoginComponent {
    login = signal("")
    senha = signal("")

    usuarioService = inject(LoginService)
    router = inject(Router);

    async confirm(inputLogin: HTMLInputElement, inputSenha: HTMLInputElement) {
        if (inputLogin.reportValidity() && inputSenha.reportValidity()) {
            try {
                await this.usuarioService.login({ email: this.login(), senha: this.senha() });

                this.router.navigateByUrl('/');

            } catch (err) {
                alert(err);
            }
        }
    }

}
