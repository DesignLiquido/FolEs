import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class FitContent extends MetodoCss {
    valor: number;
    quantificador: string;
    traducao: string;

    constructor(valor: Simbolo, quantificador: string) {
        super();
        this.valor = Number(valor);
        this.quantificador = quantificador;
        this.traducao = 'fit-content';
    }

    paraTexto() {
        return `encaixar-conteudo(${this.valor}${this.quantificador})`
    }
}