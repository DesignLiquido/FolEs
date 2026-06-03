import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Ordenar extends Modificador {
    static nomeFolEs: string = "ordenar";
    static nomeCss: string = "order";
    static descricao: string = 'Define a ordem de disposição de um item em um contêiner flexível ou em grade.';
    static documentacao: string = '# `ordenar`\Os itens em um contêiner são classificados por valor crescente e, em seguida, pela ordem do código-fonte.';
    static exemploCodigo: string = 'divisao {\n  ordenar: 5;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Ordenar.nomeFolEs, Ordenar.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                Ordenar.nomeFolEs,
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
