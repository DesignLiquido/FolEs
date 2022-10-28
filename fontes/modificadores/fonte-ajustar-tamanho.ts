import { Modificador } from "./superclasse/modificador";

export class FonteAjustarTamanho extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fonte-ajustar-tamanho", "font-size-adjust");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}