import { Valor } from "../valores";
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
        variavel?: boolean
    ) {
        super("trajeto-deslocamento", "offset-path", pragmas);

        const valoresExtra = ["url", "ray"];

        if (!variavel) {
            validarValores(
                "trajeto-deslocamento",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
