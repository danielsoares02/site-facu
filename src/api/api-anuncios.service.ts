import { inject, Injectable, InputSignal } from '@angular/core';
import { LoginService } from '../auth/services/login.service';

@Injectable({
    providedIn: 'root'
})
export class ApiAnunciosService {
    loginService = inject(LoginService);
    
    async getAnuncio(anuncioId: number): Promise<AnuncioModel> {
        const response = await fetch(`http://localhost:5215/api/anuncios/${anuncioId}`);

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();



        // const anuncios = JSON.parse(localStorage.getItem('anuncios') || '[]') as AnuncioModel[];
        
        // const anuncio = anuncios.find((anuncio: AnuncioModel) => anuncio.id === anuncioId);
        
        // if (!anuncio) {
        //     throw new Error('Anuncio não encontrado');
        // }

        // return anuncio;
    }

    async getAnuncios(pesquisa?: string) {
        const response = await fetch(`http://localhost:5215/api/anuncios?pesquisa=${pesquisa}`);

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const anuncios = await response.json();

        return anuncios;

        // let anuncios = JSON.parse(localStorage.getItem('anuncios') || '[]') as AnuncioModel[];
        
        // if (pesquisa) {
        //     anuncios = anuncios.filter((anuncio: AnuncioModel) => anuncio.titulo.includes(pesquisa));
        // }

        // return anuncios;
    }

    async createAnuncio(novoAnuncio: NovoAnuncioModel) {
        const anuncio: NovoAnuncioModel = {
            ...novoAnuncio,
            // anunciante: this.loginService.usuarioLogado().id
        };

        const response = await fetch('http://localhost:5215/api/anuncios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(anuncio)
        });
        
        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();

        // const anuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');

        // const anuncio: AnuncioModel = {
        //     id: anuncios.length + 1,
        //     ...novoAnuncio,
        //     anunciante: this.loginService.usuarioLogado().id
        // };

        // anuncios.push(anuncio);
        // localStorage.setItem('anuncios', JSON.stringify(anuncios));
    }

    async atualizarAnuncio(anuncio: AnuncioModel) {
        const response = await fetch(`http://localhost:5215/api/anuncios`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(anuncio)
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();
    }

    async getMeusAnuncios() {
        const response = await fetch(`http://localhost:5215/api/anuncios/usuario/${this.loginService.usuarioLogado().id}`);

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const anuncios = await response.json();

        return anuncios;
        // const usuarioLogado = this.loginService.usuarioLogado();
        // return JSON.parse(localStorage.getItem('anuncios') || '[]').filter((anuncio: AnuncioModel) => anuncio.anunciante === usuarioLogado.id) as AnuncioModel[];
    }

}


export interface AnuncioModel {
    id: number;
    anunciante: number;
    titulo: string;
    descricao: string;
    imagem: string,
}

export type NovoAnuncioModel = Omit<AnuncioModel, 'id' | 'anunciante'>;