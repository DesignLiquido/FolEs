import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteNumerica extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "ordinal": "ordinal",
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
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["variacao-fonte-numerica", "variação-fonte-numérica"],
            "font-variant-numeric", 
            pragmas
        );

        validarValores('variação-fonte-numérica', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
