import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Sepia extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;

    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = "sepia";
    }

    paraTexto() {
        if (this.quantificador) {
            return `sepia(${this.valor}${this.quantificador})`;
        }

        return `sepia(${this.valor})`;
    }
}
