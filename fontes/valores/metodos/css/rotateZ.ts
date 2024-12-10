import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class RotateZ extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'rotateZ';
    }

    paraTexto() {
        if (this.quantificador) {
            this.quantificador === 'graus' ? this.quantificador = 'deg' : null;
            return `rotacionar-eixo-z(${this.valor}${this.quantificador})`
        }

        return `rotacionar-eixo-z(${this.valor})`
    }
}