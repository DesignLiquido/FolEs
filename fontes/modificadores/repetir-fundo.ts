import { Modificador } from "./superclasse/modificador";

export class RepetirFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("repetir-fundo", "background-repeat");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
