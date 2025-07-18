import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebraDecoracaoCaixa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        quebrar: "slice",
        clonar: "clone",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["quebra-decoracao-caixa", "quebra-decoração-caixa"],
            "box-decoration-break",
            pragmas,
        );

        // TODO: Repensar
        // if (!valorVariavel)
        //     validarValores(
        //         "quebra-decoração-caixa",
        //         valor,
        //         this.valoresAceitos,
        //     );

        this.valores = valores;
    }
}
