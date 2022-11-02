import { Modificador } from "./superclasse/modificador";

export class PreenchimentoSuperior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-superior", "padding-top");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
