import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "conter": "contain",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("comportamento-rolagem-mouse", "overscroll-behavior", pragmas);
        
        if (!valorVariavel) validarValores('comportamento-rolagem-mouse',valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
