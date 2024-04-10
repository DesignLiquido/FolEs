import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class RotacionarVertical extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'rotateY';
    }

    paraTexto() {
        if (this.quantificador) {
            return `rotateY(${this.valor}${this.quantificador})`
        }

        return `rotateY(${this.valor})`
    }
}