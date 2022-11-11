import { Modificador } from "./superclasse/modificador";

export class EspacamentoLetras extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["espacamento-letras", "espaçamento-letras"], "letter-spacing");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
