import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { LoginService } from '../../auth/services/login.service';
import { ApiUsuarioService, UsuarioModel } from '../../api/api-usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-meus-dados',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './meus-dados.component.html',
    styleUrls: ['./meus-dados.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MeusDadosComponent {
    loginService = inject(LoginService);
    usuarioService = inject(ApiUsuarioService);
    usuarioLogado = signal<UsuarioModel>(this.loginService.usuarioLogado())

    async confirm(inputNome: HTMLInputElement, inputLogin: HTMLInputElement, inputSenha: HTMLInputElement) {
        if (inputNome.reportValidity() && inputLogin.reportValidity() && inputSenha.reportValidity()) {
            await this.usuarioService.atualizarDados(this.usuarioLogado())

            alert("Dados atualizados!");
        }
    }
}
