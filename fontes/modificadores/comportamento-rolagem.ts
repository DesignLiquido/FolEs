import { Modificador } from "./superclasse/modificador";

export class ComportamentoRolagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("comportamento-rolagem", "scroll-behavior");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
