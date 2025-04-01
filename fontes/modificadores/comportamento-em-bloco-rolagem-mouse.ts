import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoEmBlocoRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "conter": "contain",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("comportamento-em-bloco-rolagem-mouse", "overscroll-behavior-block", pragmas);

        if (!valorVariavel) validarValores('comportamento-em-bloco-rolagem-mouse',valor, this.valoresAceitos);

        this.valor = valor;
    }
}
