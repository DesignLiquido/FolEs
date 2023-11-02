import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Fluxo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "esquerda": "left",
        "direita": "right",
        "ambos": "both",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("fluxo", "clear", pragmas);
        
        validarValores('fluxo', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
