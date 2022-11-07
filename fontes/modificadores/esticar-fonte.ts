import { Modificador } from "./superclasse/modificador";

export class EsticarFonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("esticar-fonte", "font-stretch");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
