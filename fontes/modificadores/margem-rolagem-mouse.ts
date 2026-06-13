import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemRolagemMouse extends Modificador {
    static nomeFolEs: string = "margem-rolagem-mouse";
    static nomeCss: string = "scroll-margin";
    static descricao: string = 'Define a margem da barra de rolagem da página.';
    static documentacao: string = '# `margem-rolagem-mouse`\nPropriedade de atribuição abreviada que define todas as margens de rolagem de um elemento de uma só vez, atribuindo valores da mesma forma que a propriedade margem.';
    static exemploCodigo: string = 'corpo {\n  margem-rolagem-mouse: 10px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemRolagemMouse.nomeFolEs, MargemRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    MargemRolagemMouse.nomeFolEs,
                    valores,
                    null,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    MargemRolagemMouse.nomeFolEs,
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
