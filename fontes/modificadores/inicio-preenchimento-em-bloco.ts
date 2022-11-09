import { Modificador } from "./superclasse/modificador";

export class InicioPreenchimentoEmBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-preenchimento-em-bloco", "início-preenchimento-em-bloco"], 
            "padding-block-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
