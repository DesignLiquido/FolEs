import { Modificador } from "./superclasse/modificador";

export class AlinharUltimoItem extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["alinhar-ultimo-item", "alinhar-último-item"], "text-align-last");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
