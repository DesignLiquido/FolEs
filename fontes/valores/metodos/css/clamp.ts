import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Clamp extends MetodoCss {
    valorMin: number;
    quantificadorMin: string;
    valorMed: number;
    quantificadorMed: string;
    valorMax: number;
    quantificadorMax: string;
    traducao: string;

    constructor(
        valorMin: Simbolo,
        quantificadorMin: string,
        valorMed: number,
        quantificadorMed: string,
        valorMax: number,
        quantificadorMax: string,
    ) {
        super();
        this.valorMin = Number(valorMin["lexema"]);
        this.quantificadorMin = quantificadorMin["lexema"];
        this.valorMed = Number(valorMed["lexema"]);
        this.quantificadorMed = quantificadorMed["lexema"];
        this.valorMax = Number(valorMax["lexema"]);
        this.quantificadorMax = quantificadorMax["lexema"];
        this.traducao = "clamp";
    }

    paraTexto() {
        return `limitar(${this.valorMin}${this.quantificadorMin}, ${this.valorMed}${this.quantificadorMed}, ${this.valorMax}${this.quantificadorMax})`;
    }
}
