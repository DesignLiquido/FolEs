import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmBloco extends Modificador {
    static nomeFolEs: string = "recuo-em-bloco";
    static nomeCss: string = "padding-block";
    static descricao: string = 'Define o início do bloco e o preenchimento final de um elemento.';
    static documentacao: string = '# `recuo-em-bloco`\nO valor atribuído é mapeado para as propriedades de preenchimento físico, dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'p {\n  recuo-em-bloco: 10px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoEmBloco.nomeFolEs, RecuoEmBloco.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    RecuoEmBloco.nomeFolEs,
                    valores,
                    null,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    RecuoEmBloco.nomeFolEs,
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
