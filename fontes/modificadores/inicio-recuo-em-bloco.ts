import { Modificador } from "./superclasse/modificador";

export class InicioRecuoEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-recuo-em-bloco", "início-recuo-em-bloco"], 
            "padding-block-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
