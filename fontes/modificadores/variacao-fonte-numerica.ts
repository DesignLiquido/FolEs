import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteNumerica extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        ordinal: "ordinal",
        "zero-cortado": "slashed-zero",
        "numeros-alinhados": "lining-nums",
        "números-alinhados": "lining-nums",
        "numeros-antigos": "oldstyle-nums",
        "números-antigos": "oldstyle-nums",
        "numeros-proporcionais": "proportional-nums",
        "números-proporcionais": "proportional-nums",
        "numeros-tabulares": "tabular-nums",
        "números-tabulares": "tabular-nums",
        "fracoes-diagonais": "diagonal-fractions",
        "frações-diagonais": "diagonal-fractions",
        "fracoes-empilhadas": "stacked-fractions",
        "frações-empilhadas": "stacked-fractions",
    };

    static nomeCss: string = "font-variant-numeric";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["variacao-fonte-numerica", "variação-fonte-numérica"],
            VariacaoFonteNumerica.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "variação-fonte-numérica",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
