import { Modificador } from "./superclasse/modificador";

export class EspacamentoFonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["espacamento-fonte", "espaçamento-fonte"], "font-kerning");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
