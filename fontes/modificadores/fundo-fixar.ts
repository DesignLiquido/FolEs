import { Modificador } from "./superclasse/modificador";

export class FundoFixar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo-fixar", "background-attachment");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
