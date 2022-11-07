import { Modificador } from "./superclasse/modificador";

export class ModoPreenchimentoAnimacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["modo-preenchimento-animacao", "modo-preenchimento-animação"], 
            "animation-fill-mode"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
