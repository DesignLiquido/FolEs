import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteMaiuscula extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "maiusculas-pequenas": "small-caps",
        "maiúsculas-pequenas": "small-caps",
        "todas-maiusculas-pequenas": "all-small-caps",
        "todas-maiúsculas-pequenas": "all-small-caps",
        "maiusculas-menores": "petite-caps",
        "maiúsculas-menores": "petite-caps",
        "todas-maiusculas-menores": "all-petite-caps",
        "todas-maiúsculas-menores": "all-petite-caps",
        misturar: "unicase",
        "titulo-maiusculo": "titling-caps",
        "título-maiúsculo": "titling-caps",
    };

    static nomeCss: string = "font-variant-caps";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["variacao-fonte-maiuscula", "variação-fonte-maiúscula"],
            VariacaoFonteMaiuscula.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "variação-fonte-maiúscula",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
