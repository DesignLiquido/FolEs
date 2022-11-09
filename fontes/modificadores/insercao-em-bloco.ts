import { Modificador } from "./superclasse/modificador";

export class InsercaoEmBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["insercao-em-bloco", "inserção-em-bloco"], "inset-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
