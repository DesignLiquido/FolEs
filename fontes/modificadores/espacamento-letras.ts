import { Modificador } from "./superclasse/modificador";

export class EspacamentoLetras extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["espacamento-letras", "espaçamento-letras"], "letter-spacing");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
