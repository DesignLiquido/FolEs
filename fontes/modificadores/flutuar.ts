import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class Flutuar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esquerda": "left",
        "direita": "right",
        "nenhum": "none",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("flutuar", "float");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'flutuar' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
