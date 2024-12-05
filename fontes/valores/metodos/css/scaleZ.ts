import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class ScaleZ extends MetodoCss {
    valor1: number;
    traducao: string;
    
    constructor(valor1: Simbolo, valor2: Simbolo) {
        super();       
        this.valor1 = Number(valor1.lexema);
        this.traducao = 'scaleZ';
    }

    paraTexto() {
        return `escalamentoZ(${this.valor1})`
    }
}