import { Modificador } from "./superclasse/modificador";

export class ProporcaoTela extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["proporcao-tela", "proporção-tela"], "aspect-ratio");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
