import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class ScaleX extends MetodoCss {
    valor1: number;
    traducao: string;
    
    constructor(valor1: Simbolo, valor2: Simbolo) {
        super();       
        this.valor1 = Number(valor1.lexema);
        this.traducao = 'scaleX';
    }

    paraTexto() {
        return `escalamento-horizontal(${this.valor1})`
    }
}