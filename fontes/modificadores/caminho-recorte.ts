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

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("caminho-recorte", "clip-path", pragmas);

        const valoresExtra = ['inset', 'circle', 'ellipse', 'polygon', 'path', 'rect', 'shape', 'xywh'];

        if (!valorVariavel)
            validarValores(
                "caminho-recorte",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valores = valores;
    }
}
