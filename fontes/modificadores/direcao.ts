import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class Direcao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esquerda-direita": "ltr",
        "direita-esquerda": "rtl",
    }

    constructor(valor: string, quantificador?: string) {
        super(["direcao", "direção"], "direction");

        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)) {
            throw new Error(`Propriedade 'direção' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
