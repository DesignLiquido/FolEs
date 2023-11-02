import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

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

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("toque-tela", "touch-action", pragmas);

        validarValores('toque-tela', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
