import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Conteudo extends Modificador {
    static nomeFolEs: string[] = ["conteudo", "conteúdo"];
    static nomeCss: string = "content";
    static descricao: string = 'Substitui um elemento por um valor gerado.';
    static documentacao: string = '# `conteudo`\nOs objetos inseridos usando esta propriedade serão tratados pela aplicação como elementos substituídos anônimos.';
    static exemploCodigo: string = 'p {\n  conteudo: não-abrir-citação;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        nenhum: "none",
        "abrir-citacao": "open-quote",
        "abrir-citação": "open-quote",
        "fechar-citacao": "close-quote",
        "fechar-citação": "close-quote",
        "nao-abrir-citacao": "no-open-quote",
        "não-abrir-citação": "no-open-quote",
        "nao-fechar-citacao": "no-close-quote",
        "não-fechar-citação": "no-close-quote",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Conteudo.nomeFolEs, Conteudo.nomeCss, pragmas);

        const valoresExtra = ["cross-fade", "counter", "image", "image-set", "linear-gradient", "url",];

        if (!variavel) {
            validarValores(
                Conteudo.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
