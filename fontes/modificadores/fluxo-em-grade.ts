import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class FluxoEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "linha": "row",
        "coluna": "column",
        "denso": "dense",
    }

    constructor(valor: string, quantificador?: string) {
        super("fluxo-em-grade", "grid-auto-flow");

        // OBS.: Também aceita receber múltiplos valores. 
        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'fluxo-em-grade' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
