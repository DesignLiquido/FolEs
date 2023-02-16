import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class EventosPonteiro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string) {
        super("eventos-ponteiro", "pointer-events");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'eventos-ponteiro' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
