import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class PropriedadeTransicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "todas": "all",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["propriedade-transicao", "propriedade-transição"],
            "transition-property"
        );

        // OBS.: Também aceita receber valores do tipo <custom-ident>

        // A lógica abaixo cobre somente o recebimento dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 
        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'propriedade-transição' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
