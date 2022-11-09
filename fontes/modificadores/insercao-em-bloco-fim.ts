import { Modificador } from "./superclasse/modificador";

export class InsercaoEmBlocoFim extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["insercao-em-bloco-fim", "inserção-em-bloco-fim"], "inset-block-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
