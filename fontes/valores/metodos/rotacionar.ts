import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Rotacionar extends Metodo {
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
            return `rotate(${this.valor}${this.quantificador})`
        }

        return `rotate(${this.valor})`
    }
}