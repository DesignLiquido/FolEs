import { Modificador } from "./superclasse/modificador";

export class CelulasVazias extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["celulas-vazias", "células-vazias"], "empty-cells");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
