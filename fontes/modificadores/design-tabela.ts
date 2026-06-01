import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DesignTabela extends Modificador {
    static nomeFolEs: string = "design-tabela";
    static nomeCss: string = "table-layout";
    static descricao: string = 'Define o algoritmo usado para dispor as células, linhas e colunas de uma tabela.';
    static documentacao: string = '# `design-tabela`\nPCom esse algoritmo, toda a tabela pode ser renderizada assim que a primeira linha da tabela for baixada e analisada. Isso pode acelerar o tempo de renderização no método de layout "automático", mas o conteúdo da célula subsequente pode não caber nas larguras de coluna fornecidas.';
    static exemploCodigo: string = 'tabela {\n  design-tabela: fixo;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        fixo: "fixed",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(DesignTabela.nomeFolEs, DesignTabela.nomeCss, pragmas);

        if (!variavel) validarValores(DesignTabela.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
