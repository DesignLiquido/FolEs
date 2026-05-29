import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TrajetoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        "margem-caixa": "margin-box",
        "caixa-batida": "stroke-box",
    };

    static nomeCss: string = "offset-path";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("trajeto-deslocamento", TrajetoDeslocamento.nomeCss, pragmas);

        const valoresExtra = ['url', 'ray', 'path', 'inset', 'circle', 'ellipse', 'polygon', 'rect', 'shape', 'xywh'];

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
