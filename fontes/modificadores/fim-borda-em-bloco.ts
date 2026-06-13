import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class FimBordaEmBloco extends Modificador {
    static nomeFolEs: string = "fim-borda-em-bloco";
    static nomeCss: string = "border-block-end";
    static descricao: string = 'Define cor, estilo e largura do fim de uma borda em bloco.';
    static documentacao: string = '# `fim-borda-em-bloco`\nPropriedade de atribuição abreviada para definir os valores das propriedades de borda em bloco individuais em um único local na folha de estilo.';
    static exemploCodigo: string = 'divisao {\n  fim-borda-em-bloco: media tracejado azul;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FimBordaEmBloco.nomeFolEs, FimBordaEmBloco.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    FimBordaEmBloco.nomeFolEs,
                    valores
                );
            } else {
                validarMultiplosQualitativos(
                    FimBordaEmBloco.nomeFolEs,
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
