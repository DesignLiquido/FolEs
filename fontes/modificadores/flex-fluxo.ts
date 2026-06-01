import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class FlexFluxo extends Modificador {
    static nomeFolEs: string = "flex-fluxo";
    static nomeCss: string = "flex-flow";
    static descricao: string = 'Especifica a direção de um contêiner com exibição do tipo flex.';
    static documentacao: string = '# `flex-fluxo`\nPropriedade de atribuição abreviada que especifica a direção de um contêiner flexível, bem como suas definições de agrupamento.';
    static exemploCodigo: string = 'divisao {\n  flex-fluxo: coluna agrupar;\n}';

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
        variavel?: boolean
    ) {
        super(FlexFluxo.nomeFolEs, FlexFluxo.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    FlexFluxo.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarValores(
                    FlexFluxo.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
