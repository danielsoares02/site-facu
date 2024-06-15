import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ApiUsuarioService } from '../../api/api-usuario.service';

@Component({
    selector: 'app-cadastro',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CadastroComponent {
    nome = signal("")
    login = signal("")
    senha = signal("")

    usuarioService = inject(ApiUsuarioService)
    loginService = inject(LoginService)
    router = inject(Router)

    async confirm(inputNome: HTMLInputElement, inputLogin: HTMLInputElement, inputSenha: HTMLInputElement) {
        if (inputNome.reportValidity() && inputLogin.reportValidity() && inputSenha.reportValidity()) {
            try {
                await this.usuarioService.cadastrar({ nome: this.nome(), email: this.login(), senha: this.senha() });

                await this.loginService.login({email: this.login(), senha: this.senha()});
                
                this.router.navigateByUrl('/');

            } catch (err) {
                alert(err);
            }
        }
    }
}
