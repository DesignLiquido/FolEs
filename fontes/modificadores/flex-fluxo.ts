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

    static nomeCss: string = "flex-flow";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("flex-fluxo", FlexFluxo.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    "flex-fluxo",
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarValores(
                    "flex-fluxo",
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
