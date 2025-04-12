import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Opacity extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;

    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = "opacity";
    }

    paraTexto() {
        if (this.quantificador) {
            return `opacar(${this.valor}${this.quantificador})`;
        }

        return `opacar(${this.valor})`;
    }
}
