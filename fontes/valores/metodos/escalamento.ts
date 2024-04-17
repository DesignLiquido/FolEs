import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Escalamento extends Metodo {
    valor1: number;
    valor2: number;
    traducao: string;
    
    constructor(valor1: Simbolo, valor2: Simbolo) {
        super();       
        this.valor1 = Number(valor1.lexema);
        this.valor2 = valor2 ? Number(valor2.lexema) : null;
        this.traducao = 'scale';
    }

    paraTexto() {
        if (this.valor2) {
            return `scale(${this.valor1}, ${this.valor2})`
        }

        return `scale(${this.valor1})`
    }
}