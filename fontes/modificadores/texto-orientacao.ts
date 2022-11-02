import { Modificador } from "./superclasse/modificador";

export class TextoOrientacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["texto-orientacao", "texto-orientação"], "text-orientation");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
