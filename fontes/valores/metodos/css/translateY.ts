import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class TranslateY extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'translateY';
    }

    paraTexto() {
        if (this.quantificador) {
            return `translacao-vertical(${this.valor}${this.quantificador})`
        }

        return `translacao-vertical(${this.valor})`
    }
}