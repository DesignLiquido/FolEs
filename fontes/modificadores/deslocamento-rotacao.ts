import { Modificador } from "./superclasse/modificador";

export class DeslocamentoRotacao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["deslocamento-rotacao", "deslocamento-rotação"], 
            "offset-rotate"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
