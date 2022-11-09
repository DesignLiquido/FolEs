import { Modificador } from "./superclasse/modificador";

export class InicioPreenchimentoEmLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-preenchimento-em-linha", "início-preenchimento-em-linha"], 
            "padding-inline-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
