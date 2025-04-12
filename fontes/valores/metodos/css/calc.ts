import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Calc extends MetodoCss {
    valor1: number;
    quantificador1: string;
    operador: string;
    valor2: number;
    quantificador2: string;
    traducao: string;

    constructor(
        valor1: Simbolo,
        quantificador1: Simbolo,
        operador: Simbolo,
        valor2: Simbolo,
        quantificador2: Simbolo,
    ) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.quantificador1 = quantificador1.lexema;
        this.operador = operador.lexema;
        this.valor2 = Number(valor2.lexema);
        this.quantificador2 = quantificador2.lexema;
        this.traducao = "calc";
    }

    paraTexto() {
        return `calcular(${this.valor1}${this.quantificador1} ${this.operador} ${this.valor2}${this.quantificador2})`;
    }
}
