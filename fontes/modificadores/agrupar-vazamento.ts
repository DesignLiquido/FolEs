import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class AgruparVazamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "quebrar-palavras": "break-word",
        "qualquer-lugar": "anywhere",
    }

    constructor(valor: string, quantificador?: string) {
        super("agrupar-vazamento", "overflow-wrap");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'agrupar-vazamento' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
