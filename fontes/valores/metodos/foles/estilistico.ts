import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class Estilistico extends Metodo {
    valor1: number;
    traducao: string;

    constructor(valor1: Simbolo, valor2: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.traducao = "stylistic";
    }

    paraTexto() {
        if (this.valor1 < 1 || this.valor1 > 20) {
            throw new Error('O valor da função estilistico() deve estar entre 1 e 20');
        }

        return `stylistic(${this.valor1})`;
    }
}
