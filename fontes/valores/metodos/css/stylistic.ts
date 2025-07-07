import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Stylistic extends MetodoCss {
    valor1: number;
    traducao: string;

    constructor(valor1: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.traducao = "stylistic";
    }

    paraTexto() {
        if (this.valor1 < 1 || this.valor1 > 20) {
            throw new Error('O valor da função stylistic() deve estar entre 1 e 20');
        }

        return `estilístico(${this.valor1})`;
    }
}
