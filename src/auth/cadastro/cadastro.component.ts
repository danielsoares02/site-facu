import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-cadastro',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css'
})
export default class CadastroComponent {
    nome = signal("")
    login = signal("")
    senha = signal("")

    async confirm(inputNome: HTMLInputElement, inputLogin: HTMLInputElement, inputSenha: HTMLInputElement) {
        if (inputNome.reportValidity() && inputLogin.reportValidity() && inputSenha.reportValidity()) {
            console.log(this.nome(), this.login(), this.senha());
        }
    }
}
