import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class VazamentoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "recortar": "clip",
        "elipse": "ellipsis",
    }

    constructor(valor: string, quantificador: string) {
        super("vazamento-texto", "text-overflow");

        // OBS.: Também aceita receber:
        // 1. Valores <string>;
        // 2. A função fade();

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'vazamento-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
