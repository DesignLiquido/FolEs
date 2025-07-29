import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteAlternativa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "formas-historicas": "historical-forms",
        "formas-históricas": "historical-forms",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["variacao-fonte-alternativa", "variação-fonte-alternativa"],
            "font-variant-alternates",
            pragmas,
        );

        const valoresExtra = ['annotation', 'character-variant', 'ornaments', 'styleset', 'stylistic', 'swash'];

        validarValores(
            "variação-fonte-alternativa",
            valores,
            this.valoresAceitos,
            valoresExtra
        );

        this.valores = valores;
    }
}
