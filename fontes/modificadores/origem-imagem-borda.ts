import { Modificador, PragmasModificador } from "./superclasse";

export class OrigemImagemBorda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("origem-imagem-borda", "border-image-source");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
