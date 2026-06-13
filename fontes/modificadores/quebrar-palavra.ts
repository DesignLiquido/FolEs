import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarPalavra extends Modificador {
    static nomeFolEs: string = "quebrar-palavra";
    static nomeCss: string = "word-break";
    static descricao: string = 'Define a devida estilização para os casos onde o texto possui uma quebra de linha.';
    static documentacao: string = '# `quebrar-palavra`\nEsta propriedade espeficica se as quebras de linha aparecem ou não quando o texto ultrapassa sua caixa de conteúdo.';
    static exemploCodigo: string = 'p {\n  quebrar-palavra: quebrar-tudo;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "quebrar-tudo": "break-all",
        "manter-tudo": "keep-all",
        quebrar: "break-word",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(QuebrarPalavra.nomeFolEs, QuebrarPalavra.nomeCss, pragmas);

        if (!variavel) validarValores(QuebrarPalavra.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
