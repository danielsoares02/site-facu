import { inject, Injectable, InputSignal } from '@angular/core';
import { LoginService } from '../auth/services/login.service';

@Injectable({
    providedIn: 'root'
})
export class ApiAnunciosService {
    loginService = inject(LoginService);
    
    async getAnuncio(anuncioId: number): Promise<AnuncioModel> {
        const anuncios = JSON.parse(localStorage.getItem('anuncios') || '[]') as AnuncioModel[];
        
        const anuncio = anuncios.find((anuncio: AnuncioModel) => anuncio.id === anuncioId);
        
        if (!anuncio) {
            throw new Error('Anuncio não encontrado');
        }

        return anuncio;
    }

    async getAnuncios(pesquisa?: string) {
        let anuncios = JSON.parse(localStorage.getItem('anuncios') || '[]') as AnuncioModel[];
        
        if (pesquisa) {
            anuncios = anuncios.filter((anuncio: AnuncioModel) => anuncio.titulo.includes(pesquisa));
        }

        return anuncios;
    }

    async createAnuncio(novoAnuncio: Omit<AnuncioModel, "id" | "anunciante">) {
        const anuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');

        const anuncio: AnuncioModel = {
            id: anuncios.length + 1,
            ...novoAnuncio,
            anunciante: this.loginService.usuarioLogado().id
        };

        anuncios.push(anuncio);
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
    }

    async getMeusAnuncios() {
        const usuarioLogado = this.loginService.usuarioLogado();
        return JSON.parse(localStorage.getItem('anuncios') || '[]').filter((anuncio: AnuncioModel) => anuncio.anunciante === usuarioLogado.id) as AnuncioModel[];
    }

}

export interface AnuncioModel {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string,
    anunciante: number;
}