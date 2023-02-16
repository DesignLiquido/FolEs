import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class Posicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "dentro": "static",
        "relativa": "relative",
        "absoluta": "absolute",
        "fixa": "fixed",
        "colada": "sticky",
    }

    constructor(valor: string, quantificador?: string) {
        super(["posicao", "posição"], "position");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'posição' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
