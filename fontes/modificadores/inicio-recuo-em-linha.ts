import { Modificador } from "./superclasse/modificador";

export class InicioRecuoEmLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-recuo-em-linha", "início-recuo-em-linha"], 
            "padding-inline-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
