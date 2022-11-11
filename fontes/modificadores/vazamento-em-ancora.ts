import { Modificador } from "./superclasse/modificador";

export class VazamentoEmAncora extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["vazamento-em-ancora", "vazamento-em-âncora"], 
            "overflow-anchor"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
