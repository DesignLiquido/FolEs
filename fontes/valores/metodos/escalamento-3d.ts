import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Escalamento3d extends Metodo {
    valor1: number;
    valor2: number;
    valor3: number;
    traducao: string;

    constructor(valor1: Simbolo, valor2: Simbolo, valor3: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.valor2 = Number(valor2.lexema);
        this.valor3 = Number(valor3.lexema);
        this.traducao = 'scale3d';
    }

    paraTexto() {
        return `scale3d(${this.valor1}, ${this.valor2}, ${this.valor3})`
    }
}