import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Limitar extends Metodo {
    valorMin: number;
    quantificadorMin: string;
    valorMed: number;
    quantificadorMed: string;
    valorMax: number;
    quantificadorMax: string;

    constructor(valorMin: Simbolo, quantificadorMin: string, valorMed: number, quantificadorMed: string,valorMax: number, quantificadorMax: string) {
        super();
        this.valorMin = Number(valorMin['lexema']);
        this.quantificadorMin = quantificadorMin['lexema'];
        this.valorMed = Number(valorMed['lexema']);
        this.quantificadorMed = quantificadorMed['lexema'];
        this.valorMax = Number(valorMax['lexema']);
        this.quantificadorMax = quantificadorMax['lexema'];
    }

    paraTexto() {
        return `clamp(${this.valorMin}${this.quantificadorMin}, ${this.valorMed}${this.quantificadorMed}, ${this.valorMax}${this.quantificadorMax})`
    }
}