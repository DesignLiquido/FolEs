import { Modificador } from "./superclasse/modificador";

export class TransicaoDuracao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["transicao-duracao", "transição-duração"], "transition-duration");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
