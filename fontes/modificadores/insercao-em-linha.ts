import { Modificador } from "./superclasse/modificador";

export class InsercaoEmLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super("inserir-alinhado", "inset-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
