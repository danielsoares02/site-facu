import { Injectable, inject } from '@angular/core';
import { ApiUsuarioService, LoginModel, UsuarioModel } from '../../api/api-usuario.service';
import { Route, UrlSegment } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    apiLoginService = inject(ApiUsuarioService);

    async login(login: LoginModel) {
        const usuario = await this.apiLoginService.login(login);

        if (usuario) {
            localStorage.setItem('login', JSON.stringify(usuario));
        }
    }

    logout() {
        localStorage.clear();
    }

    isLogged() {
        return !!localStorage.getItem('token');
    }

    usuarioLogado(): UsuarioModel {
        return JSON.parse(localStorage.getItem('login') || '{}');
    }

    static async canMatch(route: Route, segments: UrlSegment[]): Promise<boolean> {
        return inject(LoginService).isLogged();
    }
}
