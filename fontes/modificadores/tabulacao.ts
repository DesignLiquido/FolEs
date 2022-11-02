import { Modificador } from "./superclasse/modificador";

export class Tabulacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["tabulacao", "tabulação"], "tab-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
