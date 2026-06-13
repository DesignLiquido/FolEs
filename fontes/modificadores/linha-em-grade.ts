import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class LinhaEmGrade extends Modificador {
    static nomeFolEs: string = "linha-em-grade";
    static nomeCss: string = "grid-row";
    static descricao: string = 'Define o tamanho e a localização de um item de grade.';
    static documentacao: string = '# `linha-em-grade`\nPropriedade de atribuição abreviada que especifica o tamanho e a localização de um item de grade dentro de uma linha de grade, contribuindo com uma linha, uma extensão ou nada (automático) para seu posicionamento.';
    static exemploCodigo: string = 'linha {\n  linha-em-grade: auto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(LinhaEmGrade.nomeFolEs, LinhaEmGrade.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    LinhaEmGrade.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    false,
                    true
                );
            } else {
                validarValorNumerico(
                    LinhaEmGrade.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
