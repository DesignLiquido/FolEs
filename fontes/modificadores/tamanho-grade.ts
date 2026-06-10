import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoGrade extends Modificador {
    static nomeFolEs: string = "tamanho-grade";
    static nomeCss: string = "grid-area";
    static descricao: string = 'Define o tamanho de um item posicionado dentro de uma grade.';
    static documentacao: string = '# `tamanho-grade`\nPropriedade de atribuição abreviada que especifica o tamanho e a localização de um item dentro de uma grade, contribuindo com uma linha, uma extensão ou nada (automático) para seu posicionamento, especificando assim as bordas de sua área de grade.';
    static exemploCodigo: string = 'tabela {\n  tamanho-grade: alargar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TamanhoGrade.nomeFolEs, TamanhoGrade.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    TamanhoGrade.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    false,
                    true
                );
            } else {
                validarValorNumerico(
                    TamanhoGrade.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
