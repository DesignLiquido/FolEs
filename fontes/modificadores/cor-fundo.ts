import { Modificador } from "./superclasse/modificador";

export class CorFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-fundo", "background-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
