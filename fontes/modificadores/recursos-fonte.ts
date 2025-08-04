import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarValorString } from "./validacoes/string";

export class RecursosFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recursos-fonte", "font-feature-settings", pragmas);

        const valoresExtra = ["feature-tag-value"];

        // TODO: Repensar
        //     if (valor.includes(",")) {
        //         const separarValores = valor.split(", ");

        //         separarValores.forEach((valorIndividual) => {
        //             const validacaoString = validarValorString(valorIndividual);

        //             // Valor feature-tag-value: string de 4 caracteres (comprimento 6 com as aspas)
        //             const validacaoTagValue = valorIndividual.length === 6;

        //             if (validacaoString && validacaoTagValue) {
        //                 this.valoresAceitos[valorIndividual] = valorIndividual;
        //             }

        //             validarValorNumerico("recursos-fonte", valorIndividual, this.valoresAceitos, valoresExtra);
        //         });
        //     } else {
        //         const validacaoString = validarValorString(valor);

        //         // Valor feature-tag-value: string de 4 caracteres (comprimento 6 com as aspas)
        //         const validacaoTagValue = valor.length === 6;

        //         if (validacaoString && validacaoTagValue) {
        //             this.valoresAceitos[valor] = valor;
        //         }

        //     }

        validarValores("recursos-fonte", valores, this.valoresAceitos, valoresExtra);

        this.valores = valores;
    }
}
