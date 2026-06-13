import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaDireita extends Modificador {
    static nomeFolEs: string = "borda-direita";
    static nomeCss: string = "border-right";
    static descricao: string = 'Define as estilizações referentes à borda direita de um elemento.';
    static documentacao: string = '# `borda-direita`\nPropriedade de atribuição abreviada que define todas as propriedades da borda direita de um elemento.';
    static exemploCodigo: string = 'botao {\n borda-direita: fina;\n}';

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
        super(BordaDireita.nomeFolEs, BordaDireita.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    BordaDireita.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarMultiplosQualitativos(
                    BordaDireita.nomeFolEs,
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
