import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Opacar extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'opacity';
    }

    paraTexto() {
        if (this.quantificador) {
            return `opacity(${this.valor}${this.quantificador})`
        }

        return `opacity(${this.valor})`
    }
}