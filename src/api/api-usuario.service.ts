import { Injectable } from '@angular/core';
import { ApiConfig } from './api-config';

@Injectable({
    providedIn: 'root'
})
export class ApiUsuarioService {
    
    async login(login: LoginModel): Promise<UsuarioModel> {
        const response = await fetch('${ApiConfig.url}/api/authentication/login', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        localStorage.setItem('token', response.headers.get('Authorization') ?? "");

        return await response.json();
    }

    async cadastrar(cadastro: CadastroInicial): Promise<UsuarioModel> {
        const response = await fetch('${ApiConfig.url}/api/authentication/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cadastro)
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        localStorage.setItem('token', response.headers.get('Authorization') ?? "");

        return await response.json();
    }

    async atualizarDados(usuario: UsuarioModel) {
        const currentToken = localStorage.getItem('token');

        const response = await fetch(`${ApiConfig.url}/api/usuario`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': currentToken ?? ''
            },
            body: JSON.stringify(usuario)
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();
    }

    
    async getUsuario(id: number): Promise<UsuarioModel> {
        const currentToken = localStorage.getItem('token');

        const response = await fetch(`${ApiConfig.url}/api/usuario/${id}`, {
            headers: {
                'Authorization': currentToken ?? '',
            }
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();
    }

    async sendFeedback(value: string) {
        const currentToken = localStorage.getItem('token');

        const response = await fetch(`${ApiConfig.url}/api/usuario/feedback`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': currentToken ?? '',
            },
            body: JSON.stringify(value)
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }
    }
}

export interface LoginModel {
    email: string;
    senha: string;
}

export type CadastroInicial = Omit<UsuarioModel, "id">;

export interface UsuarioModel {
    id: number;
    nome: string;
    email: string;
    senha: string;
    contato: string;
}