import { Valor } from "../valores";
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
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("comportamento-rolagem-mouse", "overscroll-behavior", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("comum", "comportamento-rolagem-mouse", valores, this.valoresAceitos);
        //     } else {
        //         validarValores(
        //             "comportamento-rolagem-mouse",
        //             valor,
        //             this.valoresAceitos,
        //         );
        //     }

        this.valores = valores;
    }
}
