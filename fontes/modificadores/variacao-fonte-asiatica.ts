import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

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
            "font-variant-east-asian"
        );

        // OBS.: Também aceita receber múltiplos valores, desde que sejam os listados.
        // Ex.: variacao-fonte-asiatica: rubi largura-completa jis83;

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'variação-fonte-asiática' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
