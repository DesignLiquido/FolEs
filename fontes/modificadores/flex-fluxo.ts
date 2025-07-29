import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class FlexFluxo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        linha: "row",
        "inverter-linha": "row-reverse",
        coluna: "column",
        "inverter-coluna": "column-reverse",
        "nao-agrupar": "nowrap",
        "não-agrupar": "nowrap",
        agrupar: "wrap",
        "inverter-agrupamento": "wrap-reverse",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("flex-fluxo", "flex-flow", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("comum", "flex-fluxo", valores, this.valoresAceitos);
        //     } else {
        //         validarValores("flex-fluxo", valores, this.valoresAceitos);
        //     }

        this.valores = valores;
    }
}
