import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class AoMudar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "posicao-rolagem": "scroll-position",
        "posição-rolagem": "scroll-position",
        "mudar-conteudo": "contents",
        "mudar-conteúdo": "contents",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("ao-mudar", "will-change");

        // OBS.: Também pode receber valores personalizados (<custom-ident>);
        // A lógica abaixo cobre somente o recebimento dos valores aceitos.
        // TODO: Adaptar lógica futuramente para cobrir os demais casos. 
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'ao-mudar' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
