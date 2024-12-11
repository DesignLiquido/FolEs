import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class TranslateX extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'translateX';
    }

    paraTexto() {
        if (this.quantificador) {
            return `translacao-horizontal(${this.valor}${this.quantificador})`
        }

        return `translacao-horizontal(${this.valor})`
    }
}