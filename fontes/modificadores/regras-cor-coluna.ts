import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class RegrasCorColuna extends Modificador {
    static nomeFolEs: string = "regras-cor-coluna";
    static nomeCss: string = "column-rule-color";
    static descricao: string = 'Define a cor da linha desenhada entre as colunas em um layout de várias colunas.';
    static documentacao: string = '# `regras-cor-coluna`\nEsta propriedade também pode ser definida através da propriedade de atribuição abreviada `regras-coluna`.';
    static exemploCodigo: string = 'p {\n  regras-cor-coluna: azul;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RegrasCorColuna.nomeFolEs, RegrasCorColuna.nomeCss, pragmas);

        if (!variavel) validarValorCor(RegrasCorColuna.nomeFolEs, valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
