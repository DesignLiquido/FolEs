import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Hsla extends Metodo {
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
        return `hsla(${this.matiz}, ${this.saturacao}%, ${this.luminosidade}%)`
    }
}

// Trecho importante da documentação:
// Note: The legacy hsla() syntax is an alias for hsl(), accepting the same parameters and behaving in the same way.
// Traduzindo: A sintaxe de hsla() equivale a hsl(), aceitando os mesmos parâmetros e tendo o mesmo comportamento.

//https://developer.mozilla.org/en-US/docs/Web/CSS/color_value