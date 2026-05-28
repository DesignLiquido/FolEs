import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaInferior extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        espessa: "thick",
    };

    static nomeCss: string = "border-bottom";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean

    ) {
        super("borda-inferior", BordaInferior.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    "borda-direita",
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarMultiplosQualitativos(
                    "borda-inferior",
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
