import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteNumerica extends Modificador {
    static nomeFolEs: string[] = ["variacao-fonte-numerica", "variação-fonte-numérica"];
    static nomeCss: string = "font-variant-numeric";
    static descricao: string = 'Controla o uso de glifos da fonte de um referido elemento.';
    static documentacao: string = '# `variacao-fonte-numerica`\nPropriedade aplicável para números, frações e marcadores ordinais.';
    static exemploCodigo: string = 'p {\n  variacao-fonte-numerica: numeros-antigos\n}';

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

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            VariacaoFonteNumerica.nomeFolEs,
            VariacaoFonteNumerica.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                VariacaoFonteNumerica.nomeFolEs[1],
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
