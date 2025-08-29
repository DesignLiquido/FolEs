import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class BordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        preencher: "fill",
        auto: "auto",
        esticar: "stretch",
        repetir: "repeat",
        arredondar: "round",
        espacar: "space",
        espaçar: "space",
        luminancia: "luminance",
        luminância: "luminance",
        alfa: "alpha",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["borda-mascara", "borda-máscara"], "mask-border", pragmas);

        const valoresExtra: Array<string> = ["url"];

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    "borda-máscara",
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    unidadesMedida
                )
            } else {
                validarValorNumerico(
                    "borda-máscara",
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    unidadesMedida
                )
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
