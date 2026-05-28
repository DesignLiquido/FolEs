import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FiltroFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    static nomeCss: string = "backdrop-filter";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("filtro-fundo", FiltroFundo.nomeCss, pragmas);

        const valoresExtra = [
            "blur",
            "brightness",
            "contrast",
            "drop-shadow",
            "grayscale",
            "hue-rotate",
            "invert",
            "opacity",
            "saturate",
            "sepia",
            "url",
        ];

        if (!variavel) {
            validarValores(
                "filtro-fundo",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
