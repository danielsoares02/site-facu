import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnuncioModel, ApiAnunciosService, NovoAnuncioModel } from '../../../api/api-anuncios.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro-anuncio',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './cadastro-anuncio.component.html',
    styleUrl: './cadastro-anuncio.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CadastroAnuncioComponent implements OnInit {
    id = input(0)
    
    titulo = signal('')
    anuncio = signal<NovoAnuncioModel>({ titulo: '', descricao: '', imagem: '' });

    anuncioService = inject(ApiAnunciosService);
    router = inject(Router);

    async ngOnInit() {
        if (this.id()) {
            this.titulo.set("Editar anúncio")
            this.anuncio.set(await this.anuncioService.getAnuncio(this.id()));
        } else {
            this.titulo.set("Novo anúncio")
        }
    }
    
    async confirm(inputTitulo: HTMLInputElement, inputDescricao: HTMLTextAreaElement, inputImage: HTMLInputElement) {
        if (inputTitulo.reportValidity() && inputDescricao.reportValidity() && inputImage.reportValidity()) {
           
            if (inputImage.files![0].size > 1024 * 1024 * 2){ // 2mb
                alert("Imagem muito grande! Tamanho máximo de 2mb.");
                return;
            }

            try {
                this.anuncio().imagem = await toBase64(inputImage.files![0]);

                await this.anuncioService.createAnuncio(this.anuncio());
                
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

