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
        variavel?: boolean
    ) {
        super(
            ["quebra-decoracao-caixa", "quebra-decoração-caixa"],
            "box-decoration-break",
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "quebra-decoração-caixa",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
