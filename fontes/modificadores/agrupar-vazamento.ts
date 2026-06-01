import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AgruparVazamento extends Modificador {
    static nomeFolEs: string = "agrupar-vazamento";
    static nomeCss: string = "overflow-wrap";
    static descricao: string = 'Estiliza o texto dos elementos do tipo em-linha.';
    static documentacao: string = '# `agrupar-vazamento`\nDefine se o navegador deve ou não inserir quebras de linha em uma string para evitar que o texto transborde.';
    static exemploCodigo: string = 'p {\n  agrupar-vazamento: quebrar-palavras;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "quebrar-palavras": "break-word",
        "qualquer-lugar": "anywhere",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(AgruparVazamento.nomeFolEs, AgruparVazamento.nomeCss, pragmas);

        if (!variavel) validarValores(AgruparVazamento.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
