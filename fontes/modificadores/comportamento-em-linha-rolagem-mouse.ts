import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoEmLinhaRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        conter: "contain",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            "comportamento-em-linha-rolagem-mouse",
            "overscroll-behavior-inline",
            pragmas,
        );

        // TODO: Repensar
        validarValores(
            "comportamento-em-linha-rolagem-mouse",
            valores,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
