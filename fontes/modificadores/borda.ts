import { Modificador, PragmasModificador } from "./superclasse";
import { unidadesMedida } from "./atributos/quantificadores";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { Valor } from "../valores";

export class Borda extends Modificador {
    static nomeFolEs: string = "borda";
    static nomeCss: string = "border";
    static descricao: string = 'Define as estilizações referentes à borda de um elemento.';
    static documentacao: string = '# `borda`\nPropriedade de atribuição abreviada para definir todos os valores das propriedades de borda de um elemento utilizando apenas uma propriedade.';
    static exemploCodigo: string = 'botao {\n borda: 2px pontilhado;\n}';

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
        super(Borda.nomeFolEs, Borda.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    Borda.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarMultiplosQualitativos(
                    Borda.nomeFolEs,
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
