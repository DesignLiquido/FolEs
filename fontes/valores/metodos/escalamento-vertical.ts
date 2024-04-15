import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class EscalamentoVertical extends Metodo {
    valor1: number;
    traducao: string;
    
    constructor(valor1: Simbolo, valor2: Simbolo) {
        super();       
        this.valor1 = Number(valor1.lexema);
        this.traducao = 'scaleY';
    }

    paraTexto() {
        return `scaleY(${this.valor1})`
    }
}