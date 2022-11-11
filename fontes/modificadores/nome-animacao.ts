import { Modificador } from "./superclasse/modificador";

export class NomeAnimacao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["nome-animacao", "nome-animação"], "animation-name");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
