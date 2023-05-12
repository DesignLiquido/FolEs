import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class OrientacaoImagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "da-imagem": "from-image",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["orientacao-imagem", "orientação-imagem"],
            "image-orientation"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'orientação-imagem' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
