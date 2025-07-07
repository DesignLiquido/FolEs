import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class Anotacao extends Metodo {
    valor: number;
    traducao: string;

    constructor(valor: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.traducao = "annotation";
    }

    paraTexto() {
        if (this.valor < 1 || this.valor > 99) {
            throw new Error('O valor da função anotação() deve estar entre 1 e 99');
        }

        return `annotation(${this.valor})`;
    }
}
