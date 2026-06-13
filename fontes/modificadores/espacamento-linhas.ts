import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoLinhas extends Modificador {
    static nomeFolEs: string[] = ["espacamento-linhas", "espaçamento-linhas"];
    static nomeCss: string = "row-gap";
    static descricao: string = 'Define o tamanho do espaço entre as linhas de um elemento.';
    static documentacao: string = '# `espaçamento-linhas`\nO valor será aplicado sobre a largura da calha que separa as linhas. No caso de um valor percentual, este será relativo à dimensão do elemento.';
    static exemploCodigo: string = 'p {\n  espaçamento-linhas: 30%;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EspacamentoLinhas.nomeFolEs, EspacamentoLinhas.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                EspacamentoLinhas.nomeFolEs[1],
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
