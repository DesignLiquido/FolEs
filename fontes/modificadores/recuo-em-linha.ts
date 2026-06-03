import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmLinha extends Modificador {
    static nomeFolEs: string = "recuo-em-linha";
    static nomeCss: string = "padding-inline";
    static descricao: string = 'Define o início da linha e o preenchimento final de um elemento.';
    static documentacao: string = '# `recuo-em-linha`\nO valor atribuído é mapeado para as propriedades de preenchimento físico, dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'p {\n  recuo-em-linha: 10px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoEmLinha.nomeFolEs, RecuoEmLinha.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    RecuoEmLinha.nomeFolEs,
                    valores,
                    null,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    RecuoEmLinha.nomeFolEs,
                    valores,
                    null,
                    null,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
