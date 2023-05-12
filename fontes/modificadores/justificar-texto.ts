import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class JustificarTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
        "entre-palavras": "inter-word",
        "entre-caracteres": "inter-character",
        "distribuir": "distribute",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("justificar-texto", "text-justify");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'justificar-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
