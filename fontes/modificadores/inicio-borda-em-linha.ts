import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class InicioBordaEmLinha extends Modificador {
    static nomeFolEs: string[] = ["inicio-borda-em-linha", "início-borda-em-linha"];
    static nomeCss: string = "border-inline-start";
    static descricao: string = 'Define a estilização do início de uma borda em linha.';
    static documentacao: string = '# `inicio-borda-em-linha`\nPropriedade de atribuição abreviada para definir os valores das propriedades de início de borda em linha em um único local na folha de estilo.';
    static exemploCodigo: string = 'divisao {\n  inicio-borda-em-linha: 3px tracejado azul;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InicioBordaEmLinha.nomeFolEs,
            InicioBordaEmLinha.nomeCss,
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    InicioBordaEmLinha.nomeFolEs[1],
                    valores
                );
            } else {
                validarMultiplosQualitativos(
                    InicioBordaEmLinha.nomeFolEs[1],
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
