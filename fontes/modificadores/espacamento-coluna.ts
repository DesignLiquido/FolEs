import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoColuna extends Modificador {
    static nomeFolEs: string[] = ["espacamento-coluna", "espaçamento-coluna"];
    static nomeCss: string = "column-gap";
    static descricao: string = 'Define o tamanho do espaço entre as colunas de um elemento.';
    static documentacao: string = '# `espaçamento-coluna`\nPropriedade que inclui vários métodos de layout. Pode ser aplicada para várias colunas, grades e elementos do tipo flex.';
    static exemploCodigo: string = 'tabela {\n  espaçamento-coluna: 2.5em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            EspacamentoColuna.nomeFolEs,
            EspacamentoColuna.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                EspacamentoColuna.nomeFolEs[1],
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
