import { Modificador } from "./superclasse/modificador";

export class AlinharConteudo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["alinhar-conteudo", "alinhar-conteúdo"], "align-content");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
