import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaEsquerda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        espessa: "thick",
    };

    static nomeCss: string = "border-left";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean

    ) {
        super("borda-esquerda", BordaEsquerda.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    "borda-esquerda",
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarMultiplosQualitativos(
                    "borda-esquerda",
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
