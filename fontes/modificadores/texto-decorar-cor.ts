import { Modificador } from "./superclasse/modificador";

export class TextoDecorarCor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-decorar-cor", "text-decoration-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
