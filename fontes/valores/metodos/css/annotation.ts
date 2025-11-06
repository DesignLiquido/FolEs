import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Annotation extends MetodoCss {
    valor: number | string;
    traducao: string;

    constructor(valor: Simbolo) {
        super();
        this.valor = valor.tipo === 'NUMERO' ? Number(valor.lexema) : valor.lexema;
        this.traducao = "annotation";
    }

    paraTexto() {
        if (typeof this.valor === 'number') {
            if (this.valor < 1 || this.valor > 99) {
                throw new Error('O valor da função annotation() deve estar entre 1 e 99');
            }
        }
        return `anotação(${this.valor})`;
    }
}
