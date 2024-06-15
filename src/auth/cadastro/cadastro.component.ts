import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ApiUsuarioService, CadastroInicial } from '../../api/api-usuario.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cadastro',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CadastroComponent {
    cadastroInicial = signal<CadastroInicial>({ nome: '', email: '', senha: '', contato: '' })

    usuarioService = inject(ApiUsuarioService)
    loginService = inject(LoginService)
    router = inject(Router)

    async confirm(inputNome: HTMLInputElement, inputLogin: HTMLInputElement, inputSenha: HTMLInputElement) {
        if (inputNome.reportValidity() && inputLogin.reportValidity() && inputSenha.reportValidity()) {
            try {
                await this.usuarioService.cadastrar(this.cadastroInicial());

                await this.loginService.login({email: this.cadastroInicial().email, senha: this.cadastroInicial().senha});
                
                this.router.navigateByUrl('/');

            } catch (err) {
                alert(err);
            }
        }
    }
}
