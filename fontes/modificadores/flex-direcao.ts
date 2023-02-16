import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class FlexDirecao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "linha": "row",
        "inverter-linha": "row-reverse",
        "coluna": "column",
        "inverter-coluna": "column-reverse",
    }

    constructor(valor: string, quantificador?: string) {
        super(["flex-direcao", "flex-direção"], "flex-direction");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'flex-direção' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
