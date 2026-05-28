import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CaminhoRecorte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        "margem-caixa": "margin-box",
        "caixa-batida": "stroke-box",
        "borda-caixa": "border-box",
        "preenchimento-caixa": "padding-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "completar-caixa": "fill-box",
        "visualizar-caixa": "view-box",
    };

    static nomeCss: string = "clip-path";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("caminho-recorte", CaminhoRecorte.nomeCss, pragmas);

        const valoresExtra = ['inset', 'circle', 'ellipse', 'polygon', 'path', 'rect', 'shape', 'xywh'];

        if (!variavel) {
            validarValores(
                "caminho-recorte",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
