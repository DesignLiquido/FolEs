import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Linear extends Metodo {
    inicio: number;
    meio: number;
    fim: number;
    traducao: string;

    constructor(inicio: Simbolo, meio: Simbolo, fim: Simbolo) {
        super();
        this.inicio = Number(inicio.lexema);
        this.meio = Number(meio.lexema);
        this.fim = Number(fim.lexema);
        this.traducao = 'linear';
    }

    paraTexto() {
        return `linear(${this.inicio}, ${this.meio}, ${this.fim})`
    }
}