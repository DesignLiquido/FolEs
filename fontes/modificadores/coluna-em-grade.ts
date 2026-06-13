import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class ColunaEmGrade extends Modificador {
    static nomeFolEs: string = "coluna-em-grade";
    static nomeCss: string = "grid-column";
    static descricao: string = 'Especifica o tamanho e a localização de um item dentro de uma coluna de grade.';
    static documentacao: string = '# `coluna-em-grade`\nPropriedade de atribuição abreviada que pode contribuir com uma linha, uma extensão ou nada (auto) para o posicionamento de grade do item.';
    static exemploCodigo: string = 'divisão {\n  coluna-em-grade: auto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ColunaEmGrade.nomeFolEs, ColunaEmGrade.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    ColunaEmGrade.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    false,
                    true
                );
                // TODO: Aceitava validacaoPersonalizada como true
            } else {
                validarValorNumerico(
                    ColunaEmGrade.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
