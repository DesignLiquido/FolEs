import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteAsiatica extends Modificador {
    // Os valores que incluem letras e números pertencem à lista <east-asian-variant-values>
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "rubi": "ruby",
        "jis78": "jis78",
        "jis83": "jis83",
        "jis90": "jis90",
        "jis04": "jis04",
        "jis78s": "jis78",
        "simplificada": "simplified",
        "tradicional": "traditional",
        "largura-proporcional": "proportional-width",
        "largura-completa": "full-width",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["variacao-fonte-asiatica", "variação-fonte-asiática"],
            "font-variant-east-asian", 
            pragmas
        );

        validarValores('variação-fonte-asiática', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
