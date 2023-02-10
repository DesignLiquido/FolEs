import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Rgb extends Metodo {
    vermelho: number;
    verde: number;
    azul: number; 

    constructor(vermelho: Simbolo, verde: Simbolo, azul: Simbolo) {
        super();
        this.vermelho = Number(vermelho.lexema);
        this.verde = Number(verde.lexema);
        this.azul = Number(azul.lexema);
    }

    toString() {
        return `rgb(${this.vermelho}, ${this.verde}, ${this.azul})`
    }
}