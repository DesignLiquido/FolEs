import { Modificador } from "./superclasse/modificador";

export class FlexionarDirecao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["flexionar-direcao", "flexionar-direção"], "flex-direction");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
