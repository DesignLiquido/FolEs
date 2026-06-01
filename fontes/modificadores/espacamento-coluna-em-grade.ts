import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoColunaEmGrade extends Modificador {
    static nomeFolEs: string[] = ["espacamento-coluna-em-grade", "espaçamento-coluna-em-grade"];
    static nomeCss: string = "grid-column-gap";
    static descricao: string = 'Define o tamanho do espaço entre as colunas de um elemento.';
    static documentacao: string = '# `espacamento-coluna-em-grade`\nPropriedade que inclui vários métodos de layout. Pode ser aplicada para várias colunas, grades e elementos do tipo flex.';
    static exemploCodigo: string = 'p {\n  espacamento-coluna-em-grade: 3%;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            EspacamentoColunaEmGrade.nomeFolEs,
            EspacamentoColunaEmGrade.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                EspacamentoColunaEmGrade.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
