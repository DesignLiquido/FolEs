import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteMaiuscula extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "maiusculas-pequenas": "small-caps",
        "maiúsculas-pequenas": "small-caps",
        "todas-maiusculas-pequenas": "all-small-caps",
        "todas-maiúsculas-pequenas": "all-small-caps",
        "maiusculas-menores": "petite-caps",
        "maiúsculas-menores": "petite-caps",
        "todas-maiusculas-menores": "all-petite-caps",
        "todas-maiúsculas-menores": "all-petite-caps",
        "misturar": "unicase",
        "titulo-maiusculo": "titling-caps",
        "título-maiúsculo": "titling-caps",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["variacao-fonte-maiuscula", "variação-fonte-maiúscula"],
            "font-variant-caps", 
            pragmas
        );

        validarValores('variação-fonte-maiúscula', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
