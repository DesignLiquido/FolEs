import { Modificador } from "./superclasse/modificador";

export class NomeAnimacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["nome-animacao", "nome-animação"], "animation-name");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
