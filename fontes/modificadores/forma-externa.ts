import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FormaExterna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        "margem-caixa": "margin-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "borda-caixa": "border-box",
        "preenchimento-caixa": "padding-box",
    };

    static nomeCss: string = "shape-outside";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("forma-externa", FormaExterna.nomeCss, pragmas);

        const valoresExtra = ['circle', 'ellipse', 'image', 'inset', 'polygon', 'path', 'rect', 'shape', 'url', 'xywh'];

        if (!variavel) {
            validarValores(
                "forma-externa",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
