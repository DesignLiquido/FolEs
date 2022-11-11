import { Modificador } from "./superclasse/modificador";

export class ProporcaoTela extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["proporcao-tela", "proporção-tela"], "aspect-ratio");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
