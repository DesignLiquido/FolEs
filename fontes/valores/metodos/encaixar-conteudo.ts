import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class EncaixarConteudo extends Metodo {
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
        return `fit-content(${this.valor}${this.quantificador})`
    }
}