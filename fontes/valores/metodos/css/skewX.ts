import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class SkewX extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'skewX';
    }

    paraTexto() {
        if (this.quantificador) {
            this.quantificador === 'graus' ? this.quantificador = 'deg' : null;
            return `inclinar-horizontal(${this.valor}${this.quantificador})`
        }

        return `inclinar-horizontal(${this.valor})`
    }
}