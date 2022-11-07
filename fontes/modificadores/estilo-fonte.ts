import { Modificador } from "./superclasse/modificador";

export class EstiloFonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-fonte", "font-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
