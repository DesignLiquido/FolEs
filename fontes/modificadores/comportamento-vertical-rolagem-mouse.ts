import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoVerticalRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        conter: "contain",
        nenhum: "none",
    };

    static nomeCss: string = "overscroll-behavior-y";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            "comportamento-vertical-rolagem-mouse",
            ComportamentoVerticalRolagemMouse.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "comportamento-vertical-rolagem-mouse",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
