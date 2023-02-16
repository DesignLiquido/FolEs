import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class EstenderColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "todas": "all",
    }

    constructor(valor: string, quantificador?: string) {
        super("estender-coluna", "column-span");

        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'estender-coluna' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
