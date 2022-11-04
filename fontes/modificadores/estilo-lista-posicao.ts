import { Modificador } from "./superclasse/modificador";

export class EstiloListaPosicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["estilo-lista-posicao", "estilo-lista-posição"], 
            "list-style-position"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
