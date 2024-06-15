import { Injectable, inject } from '@angular/core';
import { ApiUsuarioService, LoginModel } from '../../api/api-usuario.service';
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
        localStorage.removeItem('login');
    }

    isLogged() {
        return !!localStorage.getItem('login');
    }

    usuarioLogado() {
        return JSON.parse(localStorage.getItem('login') || '{}');
    }

    static async canMatch(route: Route, segments: UrlSegment[]): Promise<boolean> {
        return inject(LoginService).isLogged();
    }
}
