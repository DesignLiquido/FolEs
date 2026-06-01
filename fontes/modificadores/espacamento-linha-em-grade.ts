import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoLinhaEmGrade extends Modificador {
    static nomeFolEs: string[] = ["espacamento-linha-em-grade", "espaçamento-linha-em-grade"];
    static nomeCss: string = "grid-row-gap";
    static descricao: string = 'Define o tamanho do intervalo entre as linhas de um elemento.';
    static documentacao: string = '# `espacamento-linha-em-grade`\nO valor será aplicado sobre a largura da calha que separa as linhas. No caso de um valor percentual, este será relativo à dimensão do elemento.';
    static exemploCodigo: string = 'tabela {\n  espacamento-linha-em-grade: 20%;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            EspacamentoLinhaEmGrade.nomeFolEs,
            EspacamentoLinhaEmGrade.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                EspacamentoLinhaEmGrade.nomeFolEs[1],
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
