import { Modificador } from "./superclasse/modificador";

export class PreenchimentoEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-em-bloco", "padding-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
