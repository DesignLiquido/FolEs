import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class CurvaCubica extends Metodo {
    valor1: number;
    valor2: number;
    valor3: number; 
    valor4: number;
    traducao: string;

    constructor(valor1: Simbolo, valor2: Simbolo, valor3: Simbolo, valor4: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.valor2 = Number(valor2.lexema);
        this.valor3 = Number(valor3.lexema);
        this.valor4 = Number(valor4.lexema);
        this.traducao = 'cubic-bezier';
    }

    paraTexto() {
        return `cubic-bezier(${this.valor1}, ${this.valor2}, ${this.valor3}, ${this.valor4})`
    }
}