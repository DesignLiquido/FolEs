import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioLinhaEmGrade extends Modificador {
    static nomeFolEs: string[] = ["inicio-linha-em-grade", "início-linha-em-grade"];
    static nomeCss: string = "grid-row-start";
    static descricao: string = 'Define a estilização do início de uma linha em grade.';
    static documentacao: string = '# `inicio-linha-em-grade`\nEsta propriedade especifica a posição inicial de um item dentro da linha da grade, contribuindo com uma linha, uma extensão ou nada (automático) para seu posicionamento na grade, especificando assim a borda inicial em linha de sua área de grade.';
    static exemploCodigo: string = 'linha {\n  inicio-linha-em-grade: 2;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InicioLinhaEmGrade.nomeFolEs,
            InicioLinhaEmGrade.nomeCss,
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    InicioLinhaEmGrade.nomeFolEs[1],
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true,
                    true
                );
            } else {
                validarValorNumerico(
                    InicioLinhaEmGrade.nomeFolEs[1],
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
