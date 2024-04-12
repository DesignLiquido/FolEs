import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Translacao3d extends Metodo {
    valor1: number;
    quantificador1: string;
    valor2: number;
    quantificador2: string;
    valor3: number;
    quantificador3: string;
    traducao: string;
    
    constructor(valor1: Simbolo, quantificador1: Simbolo, valor2: Simbolo, quantificador2: Simbolo, valor3: Simbolo, quantificador3: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.quantificador1 = quantificador1 ? quantificador1.lexema : null;
        this.valor2 = valor2 ? Number(valor2.lexema) : null;
        this.quantificador2 = quantificador2 ? quantificador2.lexema : null;
        this.valor3 = valor3 ? Number(valor3.lexema) : null;
        this.quantificador3 = quantificador3 ? quantificador3.lexema : null;
        this.traducao = 'translate3d';
    }

    paraTexto() {
        if (!this.quantificador1 && !this.valor2 && !this.quantificador2 && !this.valor3 && !this.quantificador3) {
            return `translate3d(${this.valor1})`
        }

        if (!this.quantificador1 && this.quantificador2 && this.quantificador3) {
            return `translate3d(${this.valor1}, ${this.valor2}${this.quantificador2}, ${this.valor3}${this.quantificador3})`
        }

        if (!this.quantificador2 && this.quantificador1 && this.quantificador3) {
            return `translate3d(${this.valor1}${this.quantificador1}, ${this.valor2}, ${this.valor3}${this.quantificador3})`
        }

        if (!this.quantificador3 && this.quantificador2 && this.quantificador1) {
            return `translate3d(${this.valor1}${this.quantificador1}, ${this.valor2}${this.quantificador2}, ${this.valor3})`
        }

        if (!this.quantificador1 && !this.quantificador2 && this.quantificador3) {
            return `translate3d(${this.valor1}, ${this.valor2}, ${this.valor3}${this.quantificador3})`
        }

        if (!this.quantificador3 && this.quantificador2 && !this.quantificador1) {
            return `translate3d(${this.valor1}, ${this.valor2}${this.quantificador2}, ${this.valor3})`
        }

        if (!this.quantificador3 && !this.quantificador2 && this.quantificador1) {
            return `translate3d(${this.valor1}${this.quantificador1}, ${this.valor2}, ${this.valor3})`
        }

        if (!this.quantificador3 && !this.quantificador2 && !this.quantificador1) {
            return `translate3d(${this.valor1}, ${this.valor2}, ${this.valor3})`
        }

        return `translate3d(${this.valor1}${this.quantificador1}, ${this.valor2}${this.quantificador2}, ${this.valor3}${this.quantificador3})`
    }
}