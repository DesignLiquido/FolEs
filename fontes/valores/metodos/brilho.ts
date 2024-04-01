import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Brilho extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'brightness';
    }

    paraTexto() {
        if (this.quantificador) {
            return `brightness(${this.valor}${this.quantificador})`
        }

        return `brightness(${this.valor})`
    }
}