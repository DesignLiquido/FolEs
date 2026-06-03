import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class RegrasEstiloColuna extends Modificador {
    static nomeFolEs: string = "regras-estilo-coluna";
    static nomeCss: string = "column-rule-style";
    static descricao: string = 'Define o estilo da linha desenhada entre as colunas em um layout de várias colunas.';
    static documentacao: string = '# `regras-estilo-coluna`\nEsta propriedade também pode ser definida através da propriedade de atribuição abreviada `regras-coluna`.';
    static exemploCodigo: string = 'p {\n  regras-estilo-coluna: pontilhado;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RegrasEstiloColuna.nomeFolEs, RegrasEstiloColuna.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais(RegrasEstiloColuna.nomeFolEs, valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
