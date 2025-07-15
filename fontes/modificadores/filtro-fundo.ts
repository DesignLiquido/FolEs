import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FiltroFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valor: Metodo | MetodoCss | string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
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

        let metodoResolvido = "";
        if (valor instanceof Metodo) {
            metodoResolvido = valor.traducao;
        } else if (valor instanceof MetodoCss) {
            metodoResolvido = valor.traducao;
        } else {
            metodoResolvido = valor;
        }

        if (!valorVariavel)
            validarValores(
                "filtro-fundo",
                metodoResolvido,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valor = valor;
    }
}
