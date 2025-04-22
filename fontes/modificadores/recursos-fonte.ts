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

        const validacaoString = validarValorString(valor);

        // Valor feature-tag-value: string de 4 caracteres (comprimento 6 com as aspas)
        const valoresExtra = ["feature-tag-value"];
        const validacaoTagValue = valor.length === 6;

        if (validacaoString && validacaoTagValue) {
            this.valoresAceitos[valor] = valor;
        }

        if (!valorVariavel) validarValores("recursos-fonte", valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;
    }
}
