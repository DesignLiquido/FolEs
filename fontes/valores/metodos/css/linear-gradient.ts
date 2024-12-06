import { Simbolo } from "../../../lexador";
import { cores } from "../../../modificadores/atributos/cores";
import { MetodoCss } from "./metodo-css";

export class LinearGradient extends MetodoCss {
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
        const cor1 = Object.keys(cores).filter(key => cores[key] === this.cor1);
        this.cor1 = cor1.toString();

        const cor2 = Object.keys(cores).filter(key => cores[key] === this.cor2);
        this.cor2 = cor2.toString();

        this.quantificadorAngulo === 'graus' ? this.quantificadorAngulo = 'deg' : null;
        
        return `gradiente-linear(${this.valorAngulo}${this.quantificadorAngulo}, ${this.cor1}, ${this.cor2})`
    }
}