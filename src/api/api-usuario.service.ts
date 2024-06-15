import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiUsuarioService {
    getUsuario(anunciante: any): UsuarioModel | PromiseLike<UsuarioModel | undefined> | undefined {
        throw new Error('Method not implemented.');
    }
    async login(login: LoginModel) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') ?? "[]") as LoginModel[];

        const usuario = usuarios.find(x => x.email === login.email && x.senha === login.senha);
        if (!usuario) {
            throw new Error('Usuário ou senha inválidos');
        }

        return usuario;
    }

    async cadastrar(cadastro: Omit<UsuarioModel, "id">) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') ?? "[]") as UsuarioModel[];

        const usuario: UsuarioModel = {
            id: usuarios.length + 1,
            ...cadastro
        };

        usuarios.push(usuario);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        return usuario;
    }
}

export interface LoginModel {
    email: string;
    senha: string;
}



export interface UsuarioModel {
    nome: string;
    email: string;
    senha: string;
    id: number;
}