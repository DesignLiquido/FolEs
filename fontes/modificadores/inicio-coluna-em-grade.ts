import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioColunaEmGrade extends Modificador {
    static nomeFolEs: string[] =["inicio-coluna-em-grade", "início-coluna-em-grade"];
    static nomeCss: string = "grid-column-start";
    static descricao: string = 'Define a estilização do início de uma coluna em grade.';
    static documentacao: string = '# `inicio-coluna-em-grade`\nEsta propriedade especifica a posição inicial de um item dentro da coluna em grade, contribuindo com uma linha, uma extensão ou nada (automático) para seu posicionamento na grade. Esta posição inicial define a borda inicial do bloco da área da grade.';
    static exemploCodigo: string = 'divisão {\n  inicio-coluna-em-grade: 2;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InicioColunaEmGrade.nomeFolEs,
            InicioColunaEmGrade.nomeCss,
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    InicioColunaEmGrade.nomeFolEs[1],
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true,
                    true,
                );
            } else {
                validarValorNumerico(
                    InicioColunaEmGrade.nomeFolEs[1],
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
