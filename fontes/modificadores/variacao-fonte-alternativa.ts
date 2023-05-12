import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class VariacaoFonteAlternativa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "formas-historicas": "historical-forms",
        "formas-históricas": "historical-forms",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["variacao-fonte-alternativa", "variação-fonte-alternativa"],
            "font-variant-alternates"
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

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'variação-fonte-alternativa' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
