import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LinhasInferiores extends Modificador {
    static nomeFolEs: string = "linhas-inferiores";
    static nomeCss: string = "orphans";
    static descricao: string = 'Define a quantidade mínima de linhas inferiores da aplicação.';
    static documentacao: string = '# `linhas-inferiores`\nEsta propriedade define o número mínimo de linhas em um contêiner de bloco que deve ser mostrado na parte inferior de uma página, região ou coluna.';
    static exemploCodigo: string = 'corpo {\n  linhas-inferiores: 3;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(LinhasInferiores.nomeFolEs, LinhasInferiores.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LinhasInferiores.nomeFolEs,
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
