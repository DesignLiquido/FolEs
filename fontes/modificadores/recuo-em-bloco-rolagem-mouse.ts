import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmBlocoRolagemMouse extends Modificador {
    static nomeFolEs: string = "recuo-em-bloco-rolagem-mouse";
    static nomeCss: string = "scroll-padding-block";
    static descricao: string = 'Define o preenchimento de rolagem de um elemento na dimensão do bloco.';
    static documentacao: string = '# `recuo-em-bloco-rolagem-mouse`\nA área de preenchimento de um elemento é o espaço entre seu conteúdo e sua borda.';
    static exemploCodigo: string = 'p {\n  recuo-em-bloco-rolagem-mouse: 1em 0.5em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoEmBlocoRolagemMouse.nomeFolEs, RecuoEmBlocoRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    RecuoEmBlocoRolagemMouse.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    RecuoEmBlocoRolagemMouse.nomeFolEs,
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
