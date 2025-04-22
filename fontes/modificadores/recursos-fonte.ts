import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class RecursosFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("recursos-fonte", "font-feature-settings", pragmas);

        const valoresExtra = ["feature-tag-value"];

        if (!valorVariavel) {
            if (valor.includes(",")) {
                const separarValores = valor.split(", ");

                separarValores.forEach((valorIndividual) => {
                    const validacaoString = validarValorString(valorIndividual);

                    // Valor feature-tag-value: string de 4 caracteres (comprimento 6 com as aspas)
                    const validacaoTagValue = valorIndividual.length === 6;

                    if (validacaoString && validacaoTagValue) {
                        this.valoresAceitos[valorIndividual] = valorIndividual;
                    }

                    validarValores("recursos-fonte", valorIndividual, this.valoresAceitos, valoresExtra);
                });
            } else {
                const validacaoString = validarValorString(valor);

                // Valor feature-tag-value: string de 4 caracteres (comprimento 6 com as aspas)
                const validacaoTagValue = valor.length === 6;

                if (validacaoString && validacaoTagValue) {
                    this.valoresAceitos[valor] = valor;
                }

                validarValores("recursos-fonte", valor, this.valoresAceitos, valoresExtra);
            }
        }

        this.valor = valor;
    }
}
