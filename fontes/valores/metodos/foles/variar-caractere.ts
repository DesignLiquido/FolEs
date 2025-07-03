import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class VariarCaractere extends Metodo {
    valor1: number;
    traducao: string;

    constructor(valor1: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.traducao = "character-variant";
    }

    paraTexto() {
        if (this.valor1 < 1 || this.valor1 > 99) {
            throw new Error('O valor da função variar-caractere() deve estar entre 1 e 99');
        }

        return `character-variant(${this.valor1})`;
    }
}
