import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class EncaixarConteudo extends Metodo {
    valor: number;
    quantificador: string;

    constructor(valor: Simbolo, quantificador: string) {
        super();
        this.valor = Number(valor);
        this.quantificador = quantificador;
    }

    toString() {
        return `fit-content(${this.valor}${this.quantificador})`
    }
}