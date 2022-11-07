import { Modificador } from "./superclasse/modificador";

export class PropriedadeTransicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["propriedade-transicao", "propriedade-transição"], 
            "transition-property"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
