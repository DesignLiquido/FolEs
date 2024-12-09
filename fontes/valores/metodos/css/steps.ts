import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Steps extends MetodoCss {
    numero: number;
    salto: string;
    traducao: string;

    saltos = {
        "jump-start": "salto-inicial",
        "jump-end": "salto-final",
        "jump-none": "salto-nenhum",
        "jump-both": "salto-conjunto",
        "start": "inicial",
        "end": "final",
    }

    constructor(numero: Simbolo, salto: string) {
        super();
        this.numero = Number(numero.lexema);
        this.salto = this.saltos[salto['lexema']];
        this.traducao = 'steps';
    }

    paraTexto() {
        return `passos(${this.numero}, ${this.salto})`
    }
}
