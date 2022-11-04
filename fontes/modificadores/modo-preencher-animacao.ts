import { Modificador } from "./superclasse/modificador";

export class ModoPreencherAnimacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["modo-preencher-animacao", "modo-preencher-animação"], 
            "animation-fill-mode"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
