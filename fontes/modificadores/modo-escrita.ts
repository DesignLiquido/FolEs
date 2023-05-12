import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class ModoEscrita extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "horizontal": "horizontal-tb",
        "vertical-direita-esquerda": "vertical-rl",
        "vertical-esquerda-direita": "vertical-lr",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("modo-escrita", "writing-mode");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'modo-escrita' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
