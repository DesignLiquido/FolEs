import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class FimBordaEmLinha extends Modificador {
    static nomeFolEs: string = "fim-borda-em-linha";
    static nomeCss: string = "border-inline-end";
    static descricao: string = 'Define cor, estilo e largura do fim de uma borda em linha.';
    static documentacao: string = '# `fim-borda-em-linha`\nPropriedade de atribuição abreviada para definir os valores das propriedades de borda em linha individuais em um único local na folha de estilo.';
    static exemploCodigo: string = 'divisao {\n  fim-borda-em-linha: media tracejado azul;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FimBordaEmLinha.nomeFolEs, FimBordaEmLinha.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    FimBordaEmLinha.nomeFolEs,
                    valores
                );
            } else {
                validarMultiplosQualitativos(
                    FimBordaEmLinha.nomeFolEs,
                    valores,
                    null,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
