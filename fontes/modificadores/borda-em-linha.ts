import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaEmLinha extends Modificador {
    static nomeFolEs: string = "borda-em-linha";
    static nomeCss: string = "border-inline";
    static descricao: string = 'Define as estilizações referentes à borda em linha de um elemento.';
    static documentacao: string = '# `borda-em-linha`\nPropriedade de atribuição abreviada para definir todos os valores das propriedades de borda em linha de um elemento utilizando apenas uma propriedade.';
    static exemploCodigo: string = 'botao {\n borda-em-linha: 2px tracejado;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(BordaEmLinha.nomeFolEs, BordaEmLinha.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    BordaEmLinha.nomeFolEs,
                    valores,
                    null,
                    null,
                    unidadesMedida
                );
            } else {
                validarMultiplosQualitativos(
                    BordaEmLinha.nomeFolEs,
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
