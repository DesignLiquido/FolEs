import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Sepia extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'sepia';
    }

    paraTexto() {
        if (this.quantificador) {
            return `sepia(${this.valor}${this.quantificador})`
        }

        return `sepia(${this.valor})`
    }
}