import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Inset extends MetodoCss {
    valor1: number;
    quantificador1: string;
    valor2: number;
    quantificador2: string;
    valor3: number;
    quantificador3: string;
    valor4: number;
    quantificador4: string;
    traducao: string;
    valoresAceitos: {[nomeFolEs: string]: string};

    constructor(
        valor1: Simbolo, quantificador1: Simbolo,
        valor2: Simbolo, quantificador2: Simbolo,
        valor3: Simbolo, quantificador3: Simbolo,
        valor4: Simbolo, quantificador4: Simbolo,
    ) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.quantificador1 = quantificador1 ? quantificador1.lexema : null;

        this.valor2 = valor2 ? Number(valor2.lexema) : null;
        this.quantificador2 = quantificador2 ? quantificador2.lexema : null;

        this.valor3 = valor3 ? Number(valor3.lexema) : null;
        this.quantificador3 = quantificador3 ? quantificador3.lexema : null;

        this.valor4 = valor4 ? Number(valor4.lexema) : null;
        this.quantificador4 = quantificador4 ? quantificador4.lexema : null;

        this.traducao = "inset";

        this.valoresAceitos = {
            "arredondar": "round",
        }
    }

    paraTexto() {
        if (this.valor4) {
            return `inserir(${this.valor1}${this.quantificador1} ${this.valor2}${this.quantificador2} ${this.valor3}${this.quantificador3} ${this.valor4}${this.quantificador4})`;
        } else if (this.valor3) {
            return `inserir(${this.valor1}${this.quantificador1} ${this.valor2}${this.quantificador2} ${this.valor3}${this.quantificador3})`;
        } else if (this.valor2) {
            return `inserir(${this.valor1}${this.quantificador1} ${this.valor2}${this.quantificador2})`;
        }

        return `inserir(${this.valor1}${this.quantificador1})`;
    }
}

/**
 * Caso não coberto:
 * inset(20% 30% round 20px);
 */