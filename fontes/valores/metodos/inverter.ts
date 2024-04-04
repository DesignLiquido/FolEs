import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Inverter extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'invert';
    }

    paraTexto() {
        if (this.quantificador) {
            return `invert(${this.valor}${this.quantificador})`
        }

        return `invert(${this.valor})`
    }
}