import { Modificador } from "./superclasse/modificador";

export class RecortarFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recortar-fundo", "background-clip");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
