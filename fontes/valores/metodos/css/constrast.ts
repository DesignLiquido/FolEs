import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Contrast extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'contrast';
    }

    paraTexto() {
        if (this.quantificador) {
            return `contraste(${this.valor}${this.quantificador})`
        }

        return `contraste(${this.valor})`
    }
}