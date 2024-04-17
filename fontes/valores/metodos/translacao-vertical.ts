import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class TranslacaoVertical extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'translateY';
    }

    paraTexto() {
        if (this.quantificador) {
            return `translateY(${this.valor}${this.quantificador})`
        }

        return `translateY(${this.valor})`
    }
}