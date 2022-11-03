import { Modificador } from "./superclasse/modificador";

export class TransicaoTempo extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["transicao-tempo", "transição-tempo"], 
            "transition-timing-function"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
