import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class Hifens extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "manual": "manual",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super(["hifens", "hífens"], "hyphens");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'hífens' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
