import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiUsuarioService {
    async login(login: LoginModel) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') ?? "[]") as LoginModel[];

        const usuario = usuarios.find(x => x.email === login.email && x.senha === login.senha);
        if (!usuario) {
            throw new Error('Usuário ou senha inválidos');
        }

        return usuario;
    }

    async cadastrar(cadastro: CadastroInicial) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') ?? "[]") as UsuarioModel[];

        const usuario: UsuarioModel = {
            id: usuarios.length + 1,
            ...cadastro
        };

        usuarios.push(usuario);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        return usuario;
    }

    async atualizarDados(usuario: UsuarioModel) {
        let usuarios = JSON.parse(localStorage.getItem('usuarios') ?? "[]") as UsuarioModel[];

        usuarios = usuarios.filter(x => x.id !== usuario.id);
        usuarios.push(usuario)

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        return usuario;
    }

    
    async getUsuario(id: number): Promise<UsuarioModel> {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') ?? "[]") as UsuarioModel[];

        const usuario = usuarios.find(x => x.id === id);
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        return usuario;
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
    contato: any;
}