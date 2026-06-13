import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PreencherColuna extends Modificador {
    static nomeFolEs: string = "preencher-coluna";
    static nomeCss: string = "column-fill";
    static descricao: string = 'Define as estilizações de preenchimento de uma referida coluna.';
    static documentacao: string = '# `preencher-coluna`\nEsta propriedade controla como o conteúdo de um elemento deve ser equilibrado quando dividido em colunas.';
    static exemploCodigo: string = 'coluna {\n  preencher-coluna: equilibrar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        equilibrar: "balance",
        "equilibrar-tudo": "balance-all",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(PreencherColuna.nomeFolEs, PreencherColuna.nomeCss, pragmas);

        if (!variavel) validarValores(PreencherColuna.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
