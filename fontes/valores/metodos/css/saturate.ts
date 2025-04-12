import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Saturate extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;

    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = "saturate";
    }

    paraTexto() {
        if (this.quantificador) {
            return `saturar(${this.valor}${this.quantificador})`;
        }

        return `saturar(${this.valor})`;
    }
}
