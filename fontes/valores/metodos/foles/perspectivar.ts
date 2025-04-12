import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class Perspectivar extends Metodo {
    valor: number | string;
    quantificador: string;
    traducao: string;

    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = (valor as Simbolo).lexema;
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = "perspective";
    }

    paraTexto() {
        if (this.quantificador) {
            return `perspective(${this.valor}${this.quantificador})`;
        }

        return `perspective(${this.valor})`;
    }
}
