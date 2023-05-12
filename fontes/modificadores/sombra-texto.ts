import { Modificador, PragmasModificador } from "./superclasse";

export class SombraTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("sombra-texto", "text-shadow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
