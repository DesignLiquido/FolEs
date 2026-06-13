import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebraDecoracaoCaixa extends Modificador {
    static nomeFolEs: string[] =  ["quebra-decoracao-caixa", "quebra-decoração-caixa"];
    static nomeCss: string = "box-decoration-break";
    static descricao: string = 'Define a quebra de decoração de uma referida caixa de um elemento.';
    static documentacao: string = '# `quebra-decoracao-caixa`\nPropriedade que especifica como os fragmentos de um elemento devem ser renderizados quando divididos em várias linhas, colunas ou páginas.';
    static exemploCodigo: string = 'divisao {\n  quebra-decoracao-caixa: clonar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        quebrar: "slice",
        clonar: "clone",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            QuebraDecoracaoCaixa.nomeFolEs,
            QuebraDecoracaoCaixa.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                QuebraDecoracaoCaixa.nomeFolEs[1],
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
