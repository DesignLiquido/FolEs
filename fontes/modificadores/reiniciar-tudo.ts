import { Modificador } from "./superclasse/modificador";

export class ReiniciarTudo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("reiniciar-tudo", "all");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
