import { Modificador } from "./superclasse/modificador";

export class EspacoEmBranco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["espaco-em-branco", "espaço-em-branco"], "white-space");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
