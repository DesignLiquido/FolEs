import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaSuperior extends Modificador {
    static nomeFolEs: string = "borda-superior";
    static nomeCss: string = "border-top";
    static descricao: string = 'Define as estilizações referentes à borda superior de um elemento.';
    static documentacao: string = '# `borda-superior`\nPropriedade de atribuição abreviada para definir todos os valores das propriedades de borda superior de um elemento utilizando apenas uma propriedade.';
    static exemploCodigo: string = 'botao {\n borda-superior: 1px tracejado verde;\n}';

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
        super(BordaSuperior.nomeFolEs, BordaSuperior.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    BordaSuperior.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarMultiplosQualitativos(
                    BordaSuperior.nomeFolEs,
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
