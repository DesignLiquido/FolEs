import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class EstiloListaPosicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "dentro": "inside",
        "fora": "outside",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["estilo-lista-posicao", "estilo-lista-posição"],
            "list-style-position"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'estilo-lista-posição' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
