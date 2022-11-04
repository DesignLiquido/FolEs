import { Modificador } from "./superclasse/modificador";

export class RepetirAnimacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["repetir-animacao", "repetir-animação"], 
            "animation-iteration-count"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
