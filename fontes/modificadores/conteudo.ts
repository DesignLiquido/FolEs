import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class Conteudo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["conteudo", "conteúdo"], "content");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
