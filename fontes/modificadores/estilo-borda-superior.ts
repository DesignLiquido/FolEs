import { Modificador } from "./superclasse/modificador";

export class EstiloBordaSuperior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-borda-superior", "border-top-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
