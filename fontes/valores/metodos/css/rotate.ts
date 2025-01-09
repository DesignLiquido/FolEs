import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Rotate extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'rotate';
    }

    paraTexto() {
        if (this.quantificador) {
            return `rotacionar(${this.valor}${this.quantificador})`
        }

        return `rotacionar(${this.valor})`
    }
}