import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarLinha extends Modificador {
    static nomeFolEs: string = "quebrar-linha";
    static nomeCss: string = "line-break";
    static descricao: string = 'Define como quebrar linhas de texto.';
    static documentacao: string = '# `quebrar-linha`\nEsta propriedade trabalha com pontuação e símbolos e possui efeito principalmente sobre textos escritos em chinês, japonês ou coreano (CJK).';
    static exemploCodigo: string = 'p {\n  quebrar-linha: qualquer-lugar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        solta: "loose",
        normal: "normal",
        rigorosa: "strict",
        "qualquer-lugar": "anywhere",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(QuebrarLinha.nomeFolEs, QuebrarLinha.nomeCss, pragmas);

        if (!variavel) validarValores(QuebrarLinha.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
