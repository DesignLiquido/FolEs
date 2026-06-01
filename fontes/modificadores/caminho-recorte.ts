import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CaminhoRecorte extends Modificador {
    static nomeFolEs: string = "caminho-recorte";
    static nomeCss: string = "clip-path";
    // TODO: Complementar informações
    static descricao: string = '';
    static documentacao: string = '';
    static exemploCodigo: string = '';

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
        variavel?: boolean
    ) {
        super(CaminhoRecorte.nomeFolEs, CaminhoRecorte.nomeCss, pragmas);

        const valoresExtra = ['inset', 'circle', 'ellipse', 'polygon', 'path', 'rect', 'shape', 'xywh'];

        if (!variavel) {
            validarValores(
                CaminhoRecorte.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
