import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class Espirrar extends Metodo {
    valor1: number;
    traducao: string;

    constructor(valor1: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.traducao = "swash";
    }

    paraTexto() {
        if (this.valor1 < 1 || this.valor1 > 99) {
            throw new Error('O valor da função espirrar() deve estar entre 1 e 99');
        }

        return `swash(${this.valor1})`;
    }
}
