import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Scale extends MetodoCss {
    valor1: number;
    valor2: number;
    traducao: string;

    constructor(valor1: Simbolo, valor2: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.valor2 = valor2 ? Number(valor2.lexema) : null;
        this.traducao = "scale";
    }

    paraTexto() {
        if (this.valor2) {
            return `escalamento(${this.valor1}, ${this.valor2})`;
        }

        return `escalamento(${this.valor1})`;
    }
}
