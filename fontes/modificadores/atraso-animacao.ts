import { Modificador } from "./superclasse/modificador";

export class AtrasoAnimacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["atraso-animacao", "atraso-animação"], "animation-delay");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
