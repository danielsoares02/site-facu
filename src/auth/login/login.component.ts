import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export default class LoginComponent {
    login = signal("")
    senha = signal("")

    async confirm(inputLogin: HTMLInputElement, inputSenha: HTMLInputElement) {
        if (inputLogin.reportValidity() && inputSenha.reportValidity()) {
            console.log(this.login(), this.senha());
        }
    }
}
