import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Hsla extends MetodoCss {
    matiz: number;
    saturacao: number;
    luminosidade: number; 

    constructor(matiz: Simbolo, saturacao: Simbolo, luminosidade: Simbolo) {
        super();
        this.matiz = Number(matiz.lexema);
        this.saturacao = Number(saturacao.lexema);
        this.luminosidade = Number(luminosidade.lexema);
    }

    paraTexto() {
        return `hsla(${this.matiz}, ${this.saturacao}%, ${this.luminosidade}%)`
    }
}
