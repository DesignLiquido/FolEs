import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Borrar extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'blur';
    }

    paraTexto() {
        if (this.quantificador) {
            return `blur(${this.valor}${this.quantificador})`
        }

        return `blur(${this.valor})`
    }
}