import { Modificador } from "./superclasse/modificador";

export class Exibicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["exibicao", "exibição"], "display");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
