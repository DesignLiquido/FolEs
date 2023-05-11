import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class TransformarEstilo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "achatar": "flat",
        "espaco-3d": "preserve-3d",
        "espaço-3d": "preserve-3d",
    }

    constructor(valor: string, quantificador?: string) {
        super("transformar-estilo", "transform-style");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'transformar-estilo' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
