import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class CelulasVazias extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "exibir": "show",
        "ocultar": "hide",
    }

    constructor(valor: string, quantificador?: string) {
        super(["celulas-vazias", "células-vazias"], "empty-cells");

        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'células-vazias' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
