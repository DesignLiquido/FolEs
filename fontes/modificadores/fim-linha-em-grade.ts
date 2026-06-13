import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class FimLinhaEmGrade extends Modificador {
    static nomeFolEs: string = "fim-linha-em-grade";
    static nomeCss: string = "grid-row-end";
    static descricao: string = 'Especifica a posição final de um item dentro da linha da grade.liza';
    static documentacao: string = '# `fim-linha-em-grade`\nEsta propriedade pode contribuir com uma linha, uma extensão ou nada (automático) para o posicionamento de um item na grade - especificando assim a borda final do bloco de sua área de grade.';
    static exemploCodigo: string = 'linha {\n  fim-linha-em-grade: 3;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FimLinhaEmGrade.nomeFolEs, FimLinhaEmGrade.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    FimLinhaEmGrade.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true,
                    true
                );
            } else {
                validarValorNumerico(
                    FimLinhaEmGrade.nomeFolEs,
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
