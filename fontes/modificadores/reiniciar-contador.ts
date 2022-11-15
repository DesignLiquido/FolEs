import { Modificador } from "./superclasse/modificador";

export class ReiniciarContador extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("reiniciar-contador", "counter-reset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
