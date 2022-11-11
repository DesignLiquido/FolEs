import { Modificador } from "./superclasse/modificador";

export class TravarPontuacao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["travar-pontuacao", "travar-pontuação"], "hanging-punctuation");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
