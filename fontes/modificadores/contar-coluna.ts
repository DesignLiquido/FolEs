import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ContarColuna extends Modificador {
    static nomeFolEs: string = "contar-coluna";
    static nomeCss: string = "column-count";
    static descricao: string = 'Divide o conteúdo de um elemento em um número especificado de colunas.';
    static documentacao: string = '# `contar-coluna`\nPropriedade de estilização para definir a divisão de colunas.';
    static exemploCodigo: string = 'tabela {\n  contar-coluna: 3;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ContarColuna.nomeFolEs, ContarColuna.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                ContarColuna.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                null,
                true
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
