import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteAlternativa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "formas-historicas": "historical-forms",
        "formas-históricas": "historical-forms",
    };

    static nomeCss: string = "font-variant-alternates";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["variacao-fonte-alternativa", "variação-fonte-alternativa"],
            VariacaoFonteAlternativa.nomeCss,
            pragmas,
        );

        const valoresExtra = ['annotation', 'character-variant', 'ornaments', 'styleset', 'stylistic', 'swash'];

        if (!variavel) {
            validarValores(
                "variação-fonte-alternativa",
                valores,
                this.valoresAceitos,
                valoresExtra
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
