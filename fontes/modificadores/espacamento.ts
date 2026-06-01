import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Espacamento extends Modificador {
    static nomeFolEs: string[] = ["espacamento", "espaçamento"];
    static nomeCss: string = "gap";
    static descricao: string = 'Define o valor de espaçamento entre elementos da aplicação.';
    static documentacao: string = '# `espacamento`\nPropriedade de atribuição abreviada que define as lacunas entre linhas e colunas.';
    static exemploCodigo: string = 'cabeça-tabela {\n  espacamento: 20px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Espacamento.nomeFolEs, Espacamento.nomeCss, pragmas);

        const valoresExtra = ["calc"];

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    Espacamento.nomeFolEs[1],
                    valores,
                    null,
                    valoresExtra,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    Espacamento.nomeFolEs[1],
                    valores,
                    null,
                    valoresExtra,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
