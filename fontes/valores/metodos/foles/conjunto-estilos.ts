import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class ConjuntoEstilos extends Metodo {
    valor1: number;
    valor2: number;
    valor3: number;
    traducao: string;

    constructor(valor1: Simbolo, valor2: Simbolo, valor3: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.valor2 = valor2 ? Number(valor2.lexema) : null;
        this.valor3 = valor3 ? Number(valor3.lexema) : null;
        this.traducao = "styleset";
    }

    paraTexto() {        
        if ((this.valor1 < 1 || this.valor1 > 20)
            || (this.valor2 && this.valor2 < 1 || this.valor2 > 20)
            || (this.valor3 && this.valor3 < 1 || this.valor3 > 20)
        ) {
            throw new Error('Os valores da função conjunto-estilos() devem estar entre 1 e 20');
        }

        if (this.valor2 && this.valor3) {
            return `styleset(${this.valor1}, ${this.valor2}, ${this.valor3})`;
        }

        if (this.valor2) {
            return `styleset(${this.valor1}, ${this.valor2})`;
        }

        return `styleset(${this.valor1})`;
    }
}
