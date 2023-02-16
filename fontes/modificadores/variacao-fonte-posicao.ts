import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class VariacaoFontePosicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "subscrito": "sub",
        "sobrescrito": "super",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["variacao-fonte-posicao", "variação-fonte-posição"],
            "font-variant-position"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'variação-fonte-posição' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador
    }
}
