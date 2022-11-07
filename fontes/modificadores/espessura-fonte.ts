import { Modificador } from "./superclasse/modificador";

export class EspessuraFonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("espessura-fonte", "font-weight");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
