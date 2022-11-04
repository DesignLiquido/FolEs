import { Modificador } from "./superclasse/modificador";

export class FixarFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fixar-fundo", "background-attachment");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
