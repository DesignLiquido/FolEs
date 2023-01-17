import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class ToqueTela extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
        "panorama-horizontal": "pan-x",
        "panorama-vertical": "pan-y",
        "panorama-esquerdo": "pan-left",
        "panorama-direito": "pan-right",
        "panorama-superior": "pan-up",
        "panorama-inferior": "pan-down",
        "manipulacao": "manipulation",
        "manipulação": "manipulation",
        "zoom-pinca": "pinch-zoom",
        "zoom-pinça": "pinch-zoom",
    }

    constructor(valor: string, quantificador?: string) {
        super("toque-tela", "touch-action");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'toque-tela' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
