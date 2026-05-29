import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AgruparPalavra extends Modificador {
    static nomeFolEs: string = "agrupar-palavra";
    static nomeCss: string = "word-wrap";
    static descricao: string = 'Estiliza as quebras de linha do texto da aplicação.';
    static documentacao: string = '# `agrupar-palavra`\nDefine se as quebras de linha aparecem ou não quando o texto transborda de sua caixa de conteúdo.`';
    static exemploCodigo: string = 'p {\n  agrupar-palavra: manter-tudo;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "quebrar-tudo": "break-all",
        "manter-tudo": "keep-all",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(AgruparPalavra.nomeFolEs, AgruparPalavra.nomeCss, pragmas);

        if (!variavel) validarValores("agrupar-palavra", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
