import { Modificador } from "./superclasse/modificador";

export class ModoPreenchimentoAnimacao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["modo-preenchimento-animacao", "modo-preenchimento-animação"], 
            "animation-fill-mode"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
