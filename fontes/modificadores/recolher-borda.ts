import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class RecolherBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "recolher": "collapse",
        "separar": "separate",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recolher-borda", "border-collapse");

        if (!(valor in this.valoresAceitos) && 
            !(valor in valoresGlobais)) 
        {
            throw new Error(`Propriedade 'recolher-borda' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
