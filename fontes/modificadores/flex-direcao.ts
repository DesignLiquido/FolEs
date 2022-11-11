import { Modificador } from "./superclasse/modificador";

export class FlexDirecao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["flex-direcao", "flex-direção"], "flex-direction");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
