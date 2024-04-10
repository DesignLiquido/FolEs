import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Inclinar extends Metodo {
    valor1: number;
    quantificador1: string;
    valor2: number | string;
    quantificador2: string;
    traducao: string;
    
    constructor(valor1: Simbolo, quantificador1: Simbolo, valor2: Simbolo, quantificador2: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.quantificador1 = quantificador1 ? quantificador1.lexema : null;
        this.valor2 = valor2 ? Number(valor2.lexema) : null;
        this.quantificador2 = quantificador2 ? quantificador2.lexema : null;
        this.traducao = 'skew';
    }

    paraTexto() {
        if (!this.quantificador1 && !this.valor2 && !this.quantificador2) {
            return `skew(${this.valor1})`
        }

        if (!this.valor2 && !this.quantificador2) {
            return `skew(${this.valor1}${this.quantificador1})`
        }

        return `skew(${this.valor1}${this.quantificador1}, ${this.valor2}${this.quantificador2})`
    }
}