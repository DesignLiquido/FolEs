import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class RotacionarEixoZ extends Metodo {
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
            return `rotateZ(${this.valor}${this.quantificador})`
        }

        return `rotateZ(${this.valor})`
    }
}