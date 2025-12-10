import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class Pintura extends Metodo {
    referencia: string;
    traducao: string;

    constructor (referencia: Simbolo) {
        super();
        this.referencia = referencia.lexema;
        this.traducao = 'paint';
    }

    paraTexto(): string {
        return `paint(${this.referencia})`;
    }
}
