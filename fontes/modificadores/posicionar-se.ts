import { Modificador } from "./superclasse/modificador";

export class PosicionarSe extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("posicionar-se", "place-self");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
