import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoHorizontalRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        conter: "contain",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador
    ) {
        super(
            "comportamento-horizontal-rolagem-mouse",
            "overscroll-behavior-x",
            pragmas,
        );

        // TODO: Repensar
        // if (!valorVariavel)
        //     validarValores(
        //         "comportamento-em-horizontal-rolagem-mouse",
        //         valor,
        //         this.valoresAceitos,
        //     );

        this.valores = valores;
    }
}
