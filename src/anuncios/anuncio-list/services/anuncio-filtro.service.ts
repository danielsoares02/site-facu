import { EventEmitter, Injectable, output } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AnuncioFiltroService {

    pesquisaChanged = new EventEmitter<string>();
}
