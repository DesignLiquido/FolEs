import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Hsl extends Metodo {
    matiz: number; // em inglês: 'hue'
    saturacao: number;
    luminosidade: number; 

    constructor(matiz: Simbolo, saturacao: Simbolo, luminosidade: Simbolo) {
        super();
        this.matiz = Number(matiz.lexema);
        this.saturacao = Number(saturacao.lexema);
        this.luminosidade = Number(luminosidade.lexema);
    }

    toString() {
        return `hsl(${this.matiz}, ${this.saturacao}%, ${this.luminosidade}%)`
    }
}