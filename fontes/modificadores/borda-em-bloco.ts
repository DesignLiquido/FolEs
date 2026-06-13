import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaEmBloco extends Modificador {
    static nomeFolEs: string = "borda-em-bloco";
    static nomeCss: string = "border-block";
    static descricao: string = 'Define as estilizações referentes à borda em bloco de um elemento.';
    static documentacao: string = '# `borda-em-bloco`\nPropriedade de atribuição abreviada para definir os valores das propriedades de borda em bloco com uma única propriedade.';
    static exemploCodigo: string = 'botao {\n borda-em-bloco: 1px tracejado azul;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(BordaEmBloco.nomeFolEs, BordaEmBloco.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    BordaEmBloco.nomeFolEs,
                    valores,
                    null,
                    null,
                    unidadesMedida
                );
            } else {
                validarMultiplosQualitativos(
                    BordaEmBloco.nomeFolEs,
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
