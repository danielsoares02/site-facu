import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiUsuarioService {
    
    async login(login: LoginModel): Promise<UsuarioModel> {
        const response = await fetch('http://localhost:5215/api/authentication/login', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();



        // const usuarios = JSON.parse(localStorage.getItem('usuarios') ?? "[]") as LoginModel[];

        // const usuario = usuarios.find(x => x.email === login.email && x.senha === login.senha);
        // if (!usuario) {
        //     throw new Error('Usuário ou senha inválidos');
        // }

        // return usuario;
    }

    async cadastrar(cadastro: CadastroInicial): Promise<UsuarioModel> {
        const response = await fetch('http://localhost:5215/api/authentication/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cadastro)
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();

        // const usuarios = JSON.parse(localStorage.getItem('usuarios') ?? "[]") as UsuarioModel[];

        // const usuario: UsuarioModel = {
        //     id: usuarios.length + 1,
        //     ...cadastro
        // };

        // usuarios.push(usuario);

        // localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // return usuario;
    }

    async atualizarDados(usuario: UsuarioModel) {
        const response = await fetch(`http://localhost:5215/api/usuario`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();


        // let usuarios = JSON.parse(localStorage.getItem('usuarios') ?? "[]") as UsuarioModel[];

        // usuarios = usuarios.filter(x => x.id !== usuario.id);
        // usuarios.push(usuario)

        // localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // return usuario;
    }

    
    async getUsuario(id: number): Promise<UsuarioModel> {
        const response = await fetch(`http://localhost:5215/api/usuario/${id}`);

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json();
        
        // const usuarios = JSON.parse(localStorage.getItem('usuarios') ?? "[]") as UsuarioModel[];

        // const usuario = usuarios.find(x => x.id === id);
        // if (!usuario) {
        //     throw new Error('Usuário não encontrado');
        // }

        // return usuario;
    }

    async sendFeedback(value: string) {
        const response = await fetch(`http://localhost:5215/api/usuario/feedback`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
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