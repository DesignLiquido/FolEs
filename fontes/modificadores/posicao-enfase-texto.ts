import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class PosicaoEnfaseTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "sobre": "over",
        "abaixo": "under",
        "direita": "right",
        "esquerda": "left",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["posicao-enfase-texto", "posição-ênfase-texto"],
            "text-emphasis-position"
        );

        // OBS.: Também aceita receber dois valores. 
        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'posição-ênfase-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
