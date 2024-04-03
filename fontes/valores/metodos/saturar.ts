import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Saturar extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'saturate';
    }

    paraTexto() {
        if (this.quantificador) {
            return `saturate(${this.valor}${this.quantificador})`
        }

        return `saturate(${this.valor})`
    }
}