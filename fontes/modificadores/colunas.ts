import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Colunas extends Modificador {
    static nomeFolEs: string = "colunas";
    static nomeCss: string = "columns";
    static descricao: string = 'Define o número de colunas a serem usadas ao desenhar o conteúdo de um elemento.';
    static documentacao: string = '# `colunas`\nPropriedade de atribuição abreviada para definir, além do número, as larguras dessas colunas.';
    static exemploCodigo: string = 'p {\n  colunas: 2;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Colunas.nomeFolEs, Colunas.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    Colunas.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    Colunas.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
