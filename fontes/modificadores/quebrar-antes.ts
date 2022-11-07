import { Modificador } from "./superclasse/modificador";

export class QuebrarAntes extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("quebrar-antes", "break-before");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
