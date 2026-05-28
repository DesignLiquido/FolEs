import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoEmLinhaRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        conter: "contain",
        nenhum: "none",
    };

    static nomeCss: string = "overscroll-behavior-inline";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            "comportamento-em-linha-rolagem-mouse",
            ComportamentoEmLinhaRolagemMouse.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "comportamento-em-linha-rolagem-mouse",
                valores,
                this.valoresAceitos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
