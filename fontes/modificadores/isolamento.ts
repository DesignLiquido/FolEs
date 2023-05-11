import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class Isolamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "isolar": "isolate",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("isolamento", "isolation");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'isolamento' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
