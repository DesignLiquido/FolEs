import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaEsquerda extends Modificador {
    static nomeFolEs: string = "borda-esquerda";
    static nomeCss: string = "border-left";
    static descricao: string = 'Define as estilizações referentes à borda esquerda de um elemento.';
    static documentacao: string = '# `borda-esquerda`\nPropriedade de atribuição abreviada para definir todos os valores das propriedades de borda esquerda de um elemento utilizando apenas uma propriedade.';
    static exemploCodigo: string = 'botao {\n borda-esquerda: 5px pontilhado;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        espessa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean

    ) {
        super(BordaEsquerda.nomeFolEs, BordaEsquerda.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    BordaEsquerda.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarMultiplosQualitativos(
                    BordaEsquerda.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
