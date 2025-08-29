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
        variavel?: boolean
    ) {
        super(
            "comportamento-em-linha-rolagem-mouse",
            "overscroll-behavior-inline",
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
