import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteAlternativa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "formas-historicas": "historical-forms",
        "formas-históricas": "historical-forms",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["variacao-fonte-alternativa", "variação-fonte-alternativa"],
            "font-variant-alternates", 
            pragmas
        );

        // OBS.: Há também uma lista de funções que o modificador aceita como valor:

        // - stylistic()
        // - styleset()
        // - character-variant()
        // - swash()
        // - ornaments()
        //  - annotation()

        // Cada uma das funções recebe os próprios parâmetros.
        // A lógica abaixo cobre somente o recebimento dos valores aceitos listados.
        // TODO: Adaptar lógica para cobrir os casos das funções. 
        
        validarValores('variação-fonte-alternativa', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
