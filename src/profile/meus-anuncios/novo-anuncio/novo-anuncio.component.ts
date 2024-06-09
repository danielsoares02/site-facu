import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-novo-anuncio',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './novo-anuncio.component.html',
    styleUrl: './novo-anuncio.component.css'
})
export default class NovoAnuncioComponent {
    titulo = signal("")
    descricao = signal("")
    valor = signal(0)

    async confirm(inputTitulo: HTMLInputElement, inputDescricao: HTMLTextAreaElement) {
        if (inputTitulo.reportValidity() && inputDescricao.reportValidity()) {
            console.log(this.titulo(), this.descricao(), this.valor());
        }
    }
}
