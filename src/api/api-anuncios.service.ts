import { inject, Injectable, InputSignal } from '@angular/core';
import { LoginService } from '../auth/services/login.service';
import { ApiConfig } from './api-config';

@Injectable({
    providedIn: 'root'
})
export class ApiAnunciosService {
    loginService = inject(LoginService);
    
    async getAnuncio(anuncioId: number): Promise<AnuncioModel> {
        const currentToken = localStorage.getItem('token');

        const response = await fetch(`${ApiConfig.url}/api/anuncios/${anuncioId}`, {
            headers: {
                'Authorization': currentToken ?? '',
            }
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();
    }

    async getAnuncios(pesquisa?: string) {
        const currentToken = localStorage.getItem('token');

        const response = await fetch(`${ApiConfig.url}/api/anuncios?pesquisa=${pesquisa}`, {
            headers: {
                'Authorization': currentToken ?? '',
            }
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const anuncios = await response.json();

        return anuncios;
    }

    async createAnuncio(novoAnuncio: NovoAnuncioModel) {
        const currentToken = localStorage.getItem('token');

        const anuncio: NovoAnuncioModel = {
            ...novoAnuncio,
        };

        const response = await fetch('${ApiConfig.url}/api/anuncios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': currentToken ?? '',
            },
            body: JSON.stringify(anuncio)
        });
        
        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();
    }

    async atualizarAnuncio(anuncio: AnuncioModel) {
        const currentToken = localStorage.getItem('token');

        const response = await fetch(`${ApiConfig.url}/api/anuncios`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': currentToken ?? '',
            },
            body: JSON.stringify(anuncio)
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();
    }

    async getMeusAnuncios() {
        const currentToken = localStorage.getItem('token');

        const response = await fetch(`${ApiConfig.url}/api/anuncios/usuario`, {
            headers: {
                'Authorization': currentToken ?? '',
            }
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const anuncios = await response.json();

        return anuncios;
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