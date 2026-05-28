import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoHorizontalRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        conter: "contain",
        nenhum: "none",
    };

    static nomeCss: string = "overscroll-behavior-x";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            "comportamento-horizontal-rolagem-mouse",
            ComportamentoHorizontalRolagemMouse.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "comportamento-em-horizontal-rolagem-mouse",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
