import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DecoracaoEstiloTexto extends Modificador {
    static nomeFolEs: string[] = ["decoracao-estilo-texto", "decoração-estilo-texto"];
    static nomeCss: string = "text-decoration-style";
    static descricao: string = 'Define define o estilo das linhas especificadas na propriedade decoração-linha-texto.';
    static documentacao: string = '# `decoracao-estilo-texto`\nSe a decoração especificada tiver um significado semântico específico, como uma linha que indica que algum texto foi excluído, os autores são incentivados a denotar esse significado usando uma tag HTML. Como os navegadores podem desabilitar o estilo em alguns casos, o significado semântico não desaparecerá em tal situação.';
    static exemploCodigo: string = 'p {\n  decoracao-estilo-texto: duplicado;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        solido: "solid",
        sólido: "solid",
        duplicado: "double",
        tracejado: "dashed",
        pontilhado: "dotted",
        ondulado: "wavy",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DecoracaoEstiloTexto.nomeFolEs,
            DecoracaoEstiloTexto.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                DecoracaoEstiloTexto.nomeFolEs[1],
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
