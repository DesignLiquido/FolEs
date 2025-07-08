import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Swash extends MetodoCss {
    valor1: number;
    traducao: string;

    constructor(valor1: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.traducao = "swash";
    }

    paraTexto() {
        if (this.valor1 < 1 || this.valor1 > 99) {
            throw new Error('O valor da função swash() deve estar entre 1 e 99');
        }

        return `espirrar(${this.valor1})`;
    }
}
