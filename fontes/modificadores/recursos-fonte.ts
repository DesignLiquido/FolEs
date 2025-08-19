import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RecursosFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recursos-fonte", "font-feature-settings", pragmas);

        const valoresExtra = ["feature-tag-value"];

        // TODO: Aceita valores:
        // 1. String
        // 2. feature-tag-value: string de 4 caracteres (comprimento 6 com as aspas)

        validarValores(
            "recursos-fonte",
            valores,
            this.valoresAceitos,
            valoresExtra
        );

        this.valores = valores;
    }
}
