import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class EscalaCinza extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'grayscale';
    }

    paraTexto() {
        if (this.quantificador) {
            return `grayscale(${this.valor}${this.quantificador})`
        }

        return `grayscale(${this.valor})`
    }
}