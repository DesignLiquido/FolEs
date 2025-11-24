import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Path extends MetodoCss {
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
            return `definir-caminho(${this.preenchimento} ${this.matriz})`;
        }

        return `definir-caminho(${this.matriz})`;
    }
}
