import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaInferior extends Modificador {
    static nomeFolEs: string = "borda-inferior";
    static nomeCss: string = "border-bottom";
    static descricao: string = 'Define as estilizações referentes à borda inferior de um elemento.';
    static documentacao: string = '# `borda-inferior`\nPropriedade de atribuição abreviada para definir todos os valores das propriedades de borda inferior de um elemento utilizando apenas uma propriedade.';
    static exemploCodigo: string = 'botao {\n borda-inferior: média pontilhado verde;\n}';

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
        super(BordaInferior.nomeFolEs, BordaInferior.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    BordaInferior.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarMultiplosQualitativos(
                    BordaInferior.nomeFolEs,
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
