import { Modificador } from "./superclasse/modificador";

export class PreenchimentoInferior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-inferior", "padding-bottom");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
