import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class ImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        url: "url",
        nenhum: "none",
        preencher: "fill",
        esticar: "stretch",
        repetir: "repeat",
        arredondar: "round",
        espacar: "space",
        espaçar: "space",
    };

    static nomeCss: string = "border-image";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador, variavel?: boolean
    ) {
        super("imagem-borda", ImagemBorda.nomeCss, pragmas);

        const valoresExtra = ["image", "linear-gradient", "url"];

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    "imagem-borda",
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    "imagem-borda",
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
