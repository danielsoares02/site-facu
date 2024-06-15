import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiAnunciosService } from '../../../api/api-anuncios.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-novo-anuncio',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './novo-anuncio.component.html',
    styleUrl: './novo-anuncio.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class NovoAnuncioComponent {
    titulo = signal("")
    descricao = signal("")
    valor = signal(0)

    anuncioService = inject(ApiAnunciosService);
    router = inject(Router);
    
    async confirm(inputTitulo: HTMLInputElement, inputDescricao: HTMLTextAreaElement, inputImage: HTMLInputElement) {
        if (inputTitulo.reportValidity() && inputDescricao.reportValidity() && inputImage.reportValidity()) {
            
            try {
                await this.anuncioService.createAnuncio({
                    titulo: this.titulo(),
                    descricao: this.descricao(),
                    imagem: await toBase64(inputImage.files![0])
                });
                
                alert("Anúncio criado com sucesso!");
                this.router.navigateByUrl('/profile/meus-anuncios');

            } catch (error) {
                alert(`Erro ao criar anúncio ${error}!`);
            }
        }
    }
}

function toBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
    })
}

