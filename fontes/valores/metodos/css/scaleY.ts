import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class ScaleY extends MetodoCss {
    valor1: number;
    traducao: string;

    constructor(valor1: Simbolo, valor2: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.traducao = "scaleY";
    }

    paraTexto() {
        return `escalamento-vertical(${this.valor1})`;
    }
}
