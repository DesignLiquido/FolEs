import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        espessa: "thick",
    };

    static nomeCss: string = "border-width";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("largura-borda", LarguraBorda.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    "largura-borda",
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    "largura-borda",
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
