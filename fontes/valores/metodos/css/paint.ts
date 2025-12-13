import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Paint extends MetodoCss {
    referencia: string;
    traducao: string;

    constructor (referencia: Simbolo) {
        super();
        this.referencia = referencia.lexema;
        this.traducao = 'paint';
    }

    paraTexto(): string {
        return `pintura(${this.referencia})`;
    }
}
