import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class DefinirCaminho extends Metodo {
    matriz: string;
    preenchimento: string;
    traducao: string;

    constructor(matriz: Simbolo, preenchimento?: Simbolo) {
        super();
        this.matriz = matriz.lexema;
        this.preenchimento = preenchimento.lexema;
        this.traducao = "path";
    }

    paraTexto() {
        if (this.preenchimento) {
            return `path(${this.preenchimento} ${this.matriz})`;
        }

        return `path(${this.matriz})`;
    }
}
