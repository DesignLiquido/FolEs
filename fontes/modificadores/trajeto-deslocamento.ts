import { Valor } from "../valores";
import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TrajetoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        "margem-caixa": "margin-box",
        "caixa-batida": "stroke-box",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("trajeto-deslocamento", "offset-path", pragmas);

        const valoresExtra = ["url", "ray"];

        if (!valorVariavel)
            validarValores(
                "trajeto-deslocamento",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valores = valores;
    }
}
