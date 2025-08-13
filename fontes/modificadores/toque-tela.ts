import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ToqueTela extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
        "panorama-horizontal": "pan-x",
        "panorama-vertical": "pan-y",
        "panorama-esquerdo": "pan-left",
        "panorama-direito": "pan-right",
        "panorama-superior": "pan-up",
        "panorama-inferior": "pan-down",
        manipulacao: "manipulation",
        manipulação: "manipulation",
        "zoom-pinca": "pinch-zoom",
        "zoom-pinça": "pinch-zoom",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("toque-tela", "touch-action", pragmas);

        validarValores("toque-tela", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
