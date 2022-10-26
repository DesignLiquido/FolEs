import { Modificador } from "./modificador";

export class AlinharConteudo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("alinhar-conteudo", "align-content");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}