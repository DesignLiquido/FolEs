import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Blur extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;

    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);

        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = "blur";
    }

    paraTexto() {
        if (this.quantificador) {
            return `borrar(${this.valor}${this.quantificador})`;
        }

        return `borrar(${this.valor})`;
    }
}
