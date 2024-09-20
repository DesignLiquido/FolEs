import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";
import { cores } from "../../modificadores/atributos/cores";

export class GradienteLinear extends Metodo {
    valorAngulo: number;
    quantificadorAngulo: string;
    cor1: string;
    cor2: string;
    traducao: string;
    
    constructor(valorAngulo: Simbolo, quantificadorAngulo: Simbolo, cor1: Simbolo, cor2: Simbolo) {
        super();
        this.valorAngulo = Number(valorAngulo.lexema);
        this.quantificadorAngulo = quantificadorAngulo.lexema;
        this.cor1 = cor1.lexema;
        this.cor2 = cor2.lexema;
        this.traducao = 'linear-gradient';
    }

    paraTexto() {
        this.cor1 = cores[this.cor1];
        this.cor2 = cores[this.cor2];
        this.quantificadorAngulo === 'graus' ? this.quantificadorAngulo = 'deg' : null;
        
        return `linear-gradient(${this.valorAngulo}${this.quantificadorAngulo}, ${this.cor1}, ${this.cor2})`
    }
}