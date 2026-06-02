import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class InicioBordaEmBloco extends Modificador {
    static nomeFolEs: string[] = ["inicio-borda-em-bloco", "início-borda-em-bloco"];
    static nomeCss: string = "border-block-start";
    static descricao: string = 'Define a estilização do início de uma borda em bloco.';
    static documentacao: string = '# `inicio-borda-em-bloco`\nPropriedade de atribuição abreviada para definir os valores das propriedades de início de borda em bloco em um único local na folha de estilo.';
    static exemploCodigo: string = 'divisao {\n  inicio-borda-em-bloco: 3px tracejado azul;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InicioBordaEmBloco.nomeFolEs,
            InicioBordaEmBloco.nomeCss,
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    InicioBordaEmBloco.nomeFolEs[1],
                    valores,
                    null,
                    null,
                    unidadesMedida
                );
            } else {
                validarMultiplosQualitativos(
                    InicioBordaEmBloco.nomeFolEs[1],
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
