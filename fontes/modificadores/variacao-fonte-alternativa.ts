import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteAlternativa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "formas-historicas": "historical-forms",
        "formas-históricas": "historical-forms",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["variacao-fonte-alternativa", "variação-fonte-alternativa"],
            "font-variant-alternates",
            pragmas,
        );

        const valoresExtra = ['stylistic'];

        if (!valorVariavel)
            validarValores(
                "variação-fonte-alternativa",
                valor,
                this.valoresAceitos,
                valoresExtra
            );

        this.valor = valor;
    }
}
