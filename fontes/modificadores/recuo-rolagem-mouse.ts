import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoRolagemMouse extends Modificador {
    static nomeFolEs: string = "recuo-rolagem-mouse";
    static nomeCss: string = "scroll-padding";
    static descricao: string = 'Define o preenchimento de rolagem em todos os lados de um elemento de uma só vez.';
    static documentacao: string = '# `recuo-rolagem-mouse`\nA área de preenchimento de um elemento é o espaço entre seu conteúdo e sua borda.';
    static exemploCodigo: string = 'p {\n  recuo-rolagem-mouse: 1em 0.5em 1em 1em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoRolagemMouse.nomeFolEs, RecuoRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    RecuoRolagemMouse.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    RecuoRolagemMouse.nomeFolEs,
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
