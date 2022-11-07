import { Modificador } from "./superclasse/modificador";

export class MesclarFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("mesclar-fundo", "background-blend-mode");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
