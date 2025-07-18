import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
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
        valor: Metodo | MetodoCss | string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("caminho-recorte", "clip-path", pragmas);

        const valoresExtra = ['inset', 'circle', 'ellipse', 'polygon', 'path', 'rect', 'shape', 'xywh'];

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
                "caminho-recorte",
                metodoResolvido,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valor = valor;
    }
}
