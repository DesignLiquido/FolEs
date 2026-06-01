import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstenderColuna extends Modificador {
    static nomeFolEs: string = "estender-coluna";
    static nomeCss: string = "column-span";
    static descricao: string = 'Define a extensão das colunas de uma tabela.';
    static documentacao: string = '# `estender-coluna`\nEsta propriedade possibilita que um elemento se estenda por todas as colunas quando seu valor é definido como `todas`.';
    static exemploCodigo: string = 'tabela {\n  estender-coluna: todas;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        todas: "all",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstenderColuna.nomeFolEs, EstenderColuna.nomeCss, pragmas);

        if (!variavel) validarValores(EstenderColuna.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
