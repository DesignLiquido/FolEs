import { Modificador } from "./superclasse/modificador";

export class FlexDirecao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["flex-direcao", "flex-direção"], "flex-direction");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
