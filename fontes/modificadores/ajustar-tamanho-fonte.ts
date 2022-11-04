import { Modificador } from "./superclasse/modificador";

export class AjustarTamanhoFonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("ajustar-tamanho-fonte", "font-size-adjust");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}