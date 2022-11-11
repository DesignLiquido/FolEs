import { Modificador } from "./superclasse/modificador";

export class QuebrarApos extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["quebrar-apos", "quebrar-após"], "break-after");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
