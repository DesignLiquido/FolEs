import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrientacaoTexto extends Modificador {
    static nomeFolEs: string[] = ["orientacao-texto", "orientação-texto"];
    static nomeCss: string = "text-orientation";
    static descricao: string = 'Define a orientação dos caracteres de texto em uma linha.';
    static documentacao: string = '# `orientacao-texto`\nEsta propriedade afeta apenas o texto no modo vertical (quando a propriedade `modo-escrita` não possui o valor `horizontal`). É útil para controlar a exibição de idiomas que usam script vertical e também para criar cabeçalhos de tabela verticais.';
    static exemploCodigo: string = 'p {\n  orientacao-texto: de-lado;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        misturado: "mixed",
        "de-pe": "upright",
        "de-pé": "upright",
        "de-lado": "sideways",
        "lateral-direita": "sideways-right",
        "usar-orientacao-glifo": "use-glyph-orientation",
        "usar-orientação-glifo": "use-glyph-orientation",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            OrientacaoTexto.nomeFolEs,
            OrientacaoTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(OrientacaoTexto.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
