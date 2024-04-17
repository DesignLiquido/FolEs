import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class TranslacaoHorizontal extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'translateX';
    }

    paraTexto() {
        if (this.quantificador) {
            return `translateX(${this.valor}${this.quantificador})`
        }

        return `translateX(${this.valor})`
    }
}