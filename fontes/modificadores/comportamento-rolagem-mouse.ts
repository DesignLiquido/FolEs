import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class ComportamentoRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        conter: "contain",
        nenhum: "none",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("comportamento-rolagem-mouse", "overscroll-behavior", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("comum", "comportamento-rolagem-mouse", valor, this.valoresAceitos);
            } else {
                validarValores(
                    "comportamento-rolagem-mouse",
                    valor,
                    this.valoresAceitos,
                );
            }
        }

        this.valor = valor;
    }
}
