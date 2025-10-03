import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class RegrasColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("regras-coluna", "column-rule", pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    "regras-coluna",
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarMultiplosQualitativos(
                    "regras-coluna",
                    valores,
                    this.valoresAceitos,
                    comprimentos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
