import { Valor } from "../valores";
import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FiltroFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("filtro-fundo", "backdrop-filter", pragmas);

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

        validarValores(
            "filtro-fundo",
            valores,
            this.valoresAceitos,
            valoresExtra,
        );

        this.valores = valores;
    }
}
