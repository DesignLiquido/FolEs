import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoEmGrade extends Modificador {
    static nomeFolEs: string[] = ["espacamento-em-grade", "espaçamento-em-grade"];
    static nomeCss: string = "grid-gap";
    static descricao: string = 'Define o tamanho do intervalo entre as linhas e colunas em um layout de grade.';
    static documentacao: string = '# `espacamento-em-`\nPEsta propriedade é especificada como um valor para o espaçamento entre as linhas seguido opcionalmente por um valor para o espaçamento entre as colunas. Se o espaçamento entre as colunas for omitido, é definido com o mesmo valor que o espaçamento entre as linhas.';
    static exemploCodigo: string = 'tabela {\n  espacamento-em-grade: 3vmin;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            EspacamentoEmGrade.nomeFolEs,
            EspacamentoEmGrade.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                EspacamentoEmGrade.nomeFolEs[1],
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
