import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class SkewY extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'skewY';
    }

    paraTexto() {
        if (this.quantificador) {
            this.quantificador === 'graus' ? this.quantificador = 'deg' : null;
            return `inclinar-vertical(${this.valor}${this.quantificador})`
        }

        return `inclinar-vertical(${this.valor})`
    }
}