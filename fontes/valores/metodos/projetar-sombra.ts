import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";
import { cores } from "../../modificadores/atributos/cores";

export class ProjetarSombra extends Metodo {
    valor1: number;
    quantificador1: string;
    valor2: number;
    quantificador2: string;
    valor3: number;
    quantificador3: string;
    cor: string;
    traducao: string;
    
    constructor(valor1: Simbolo, quantificador1: Simbolo, valor2: Simbolo, quantificador2: Simbolo,
        valor3: Simbolo, quantificador3: Simbolo, cor: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.quantificador1 = quantificador1.lexema;
        this.valor2 = Number(valor2.lexema);
        this.quantificador2 = quantificador2.lexema;
        this.valor3 = valor3 ? Number(valor3.lexema) : null;
        this.quantificador3 = quantificador3 ? quantificador3.lexema : null;
        this.cor = cor ? cor.lexema : null;
        this.traducao = 'drop-shadow';
    }

    paraTexto() {
        /**
         * CASOS:
         * 1. Dois valores
         * 2. Dois valores + cor
         * 3. Três valores
         * 4. Três valores + cor
         */
        if (!this.valor3) {
            if (!this.cor) {
                return `drop-shadow(${this.valor1}${this.quantificador1} ${this.valor2}${this.quantificador2})`
            } else {
                this.cor = cores[this.cor];
                return `drop-shadow(${this.valor1}${this.quantificador1} ${this.valor2}${this.quantificador2} ${this.cor})`
            }
        } else if (!this.cor) {
            return `drop-shadow(${this.valor1}${this.quantificador1} ${this.valor2}${this.quantificador2} ${this.valor3}${this.quantificador3})`
        }

        this.cor = cores[this.cor];
        return `drop-shadow(${this.valor1}${this.quantificador1} ${this.valor2}${this.quantificador2} ${this.valor3}${this.quantificador3} ${this.cor})`
    }
}