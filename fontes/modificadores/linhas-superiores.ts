import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LinhasSuperiores extends Modificador {
    static nomeFolEs: string = "linhas-superiores";
    static nomeCss: string = "widows";
    static descricao: string = 'Define a quantidade mínima de linhas superiores da aplicação.';
    static documentacao: string = '# `linhas-superiores`\nEsta propriedade define o número mínimo de linhas em um contêiner de bloco que deve ser mostrado na parte superior de uma página, região ou coluna.';
    static exemploCodigo: string = 'corpo {\n  linhas-superiores: 2;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(LinhasSuperiores.nomeFolEs, LinhasSuperiores.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LinhasSuperiores.nomeFolEs,
                valores,
                null,
                null,
                null,
                true
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
