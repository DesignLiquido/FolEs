import { Modificador } from "./superclasse/modificador";

export class BordaSuperiorEstilo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-superior-estilo", "border-top-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
