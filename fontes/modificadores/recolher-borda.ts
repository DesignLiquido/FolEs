import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class RecolherBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "recolher": "collapse",
        "separar": "separate",
    }

    constructor(valor: string, quantificador?: string) {
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
