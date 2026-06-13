import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEmLinhaRolagemMouse extends Modificador {
    static nomeFolEs: string = "margem-em-linha-rolagem-mouse";
    static nomeCss: string = "scroll-margin-inline";
    static descricao: string = 'Define a margem em linha da área de ajuste da barra de rolagem da página.';
    static documentacao: string = '# `margem-em-linha-rolagem-mouse`\nPropriedade de atribuição abreviada que define as margens de rolagem de um elemento na dimensão da linha.';
    static exemploCodigo: string = 'corpo {\n  margem-em-linha-rolagem-mouse: 10px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemEmLinhaRolagemMouse.nomeFolEs, MargemEmLinhaRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                MargemEmLinhaRolagemMouse.nomeFolEs,
                valores,
                null,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
