import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoEmBlocoRolagemMouse extends Modificador {
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
            "comportamento-em-bloco-rolagem-mouse",
            "overscroll-behavior-block",
            pragmas,
        );

        // TODO: Repensar
        validarValores(
            "comportamento-em-bloco-rolagem-mouse",
            valores,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
