import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Grayscale extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;

    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = "grayscale";
    }

    paraTexto() {
        if (this.quantificador) {
            return `escala-cinza(${this.valor}${this.quantificador})`;
        }

        return `escala-cinza(${this.valor})`;
    }
}
