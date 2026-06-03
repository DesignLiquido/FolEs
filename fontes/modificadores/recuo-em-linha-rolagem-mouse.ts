import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmLinhaRolagemMouse extends Modificador {
    static nomeFolEs: string = "recuo-em-linha-rolagem-mouse";
    static nomeCss: string = "scroll-padding-inline";
    static descricao: string = 'Define o preenchimento de rolagem de um elemento na dimensão da linha.';
    static documentacao: string = '# `recuo-em-linha-rolagem-mouse`\nA área de preenchimento de um elemento é o espaço entre seu conteúdo e sua borda.';
    static exemploCodigo: string = 'p {\n  recuo-em-linha-rolagem-mouse: 1em 0.5em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoEmLinhaRolagemMouse.nomeFolEs, RecuoEmLinhaRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    RecuoEmLinhaRolagemMouse.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    RecuoEmLinhaRolagemMouse.nomeFolEs,
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
