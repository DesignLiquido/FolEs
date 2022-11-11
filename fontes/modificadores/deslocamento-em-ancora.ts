import { Modificador } from "./superclasse/modificador";

export class DeslocamentoEmAncora extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["deslocamento-em-ancora", "deslocamento-em-âncora"], 
            "offset-anchor"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
