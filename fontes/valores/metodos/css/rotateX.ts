import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class RotateX extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'rotateX';
    }

    paraTexto() {
        if (this.quantificador) {
            this.quantificador === 'graus' ? this.quantificador = 'deg' : null;
            return `rotacionar-horizontal(${this.valor}${this.quantificador})`
        }

        return `rotacionar-horizontal(${this.valor})`
    }
}