import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class FimColunaEmGrade extends Modificador {
    static nomeFolEs: string = "fim-coluna-em-grade";
    static nomeCss: string = "grid-column-end";
    static descricao: string = 'Especifica a posição final de um item dentro da coluna da grade.';
    static documentacao: string = '# `fim-coluna-em-grade`\nEsta propriedade pode contribuir com uma linha, uma extensão ou nada (automático) para o posicionamento de um item na grade - especificando assim a borda final do bloco de sua área de grade.';
    static exemploCodigo: string = 'coluna {\n  fim-coluna-em-grade: 3;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FimColunaEmGrade.nomeFolEs, FimColunaEmGrade.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    FimColunaEmGrade.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true,
                    true
                );
            } else {
                validarValorNumerico(
                    FimColunaEmGrade.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
