import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class RotacionarHorizontal extends Metodo {
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
            return `rotateX(${this.valor}${this.quantificador})`
        }

        return `rotateX(${this.valor})`
    }
}