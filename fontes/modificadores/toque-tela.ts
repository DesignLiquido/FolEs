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

    static nomeCss: string = "touch-action";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("toque-tela", ToqueTela.nomeCss, pragmas);

        if (!variavel) validarValores("toque-tela", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
