import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class Ornamentos extends Metodo {
    valor: number;
    traducao: string;

    constructor(valor: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.traducao = "ornaments";
    }

    paraTexto() {
        if (this.valor < 1 || this.valor > 99) {
            throw new Error('O valor da função ornamentos() deve estar entre 1 e 99');
        }

        return `ornaments(${this.valor})`;
    }
}
