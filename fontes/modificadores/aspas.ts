import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class Aspas extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string) {
        super("aspas", "quotes");

        // OBS.: Também pode receber valores <string>.
        // Ex.: aspas: "«" "»" "‹" "›";
        // OBS.2: É uma sintaxe bizarra.

        // https://developer.mozilla.org/en-US/docs/Web/CSS/string 
        // https://developer.mozilla.org/en-US/docs/Web/CSS/quotes 

        // A lógica abaixo cobre somente o recebimento dos Valores Aceitos
        // TODO: Adaptar lógica para cobrir o caso de valores <string>.
        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'aspas' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
