import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Invert extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;

    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = "invert";
    }

    paraTexto() {
        if (this.quantificador) {
            return `inverter(${this.valor}${this.quantificador})`;
        }

        return `inverter(${this.valor})`;
    }
}
