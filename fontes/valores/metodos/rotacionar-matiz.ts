import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class RotacionarMatiz extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'hue-rotate';
    }

    paraTexto() {
        if (this.quantificador) {
            this.quantificador === 'graus' ? this.quantificador = 'deg' : null;
            return `hue-rotate(${this.valor}${this.quantificador})`
        }

        return `hue-rotate(${this.valor})`
    }
}