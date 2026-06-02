import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEmBlocoRolagemMouse extends Modificador {
    static nomeFolEs: string = "margem-em-bloco-rolagem-mouse";
    static nomeCss: string = "scroll-margin-block";
    static descricao: string = 'Define o final da margem em bloco da área de ajuste da barra de rolagem da página.';
    static documentacao: string = '# `margem-em-bloco-rolagem-mouse`\nPropriedade de atribuição abreviada que define as margens de rolagem de um elemento na dimensão do bloco.';
    static exemploCodigo: string = 'corpo {\n  margem-em-bloco-rolagem-mouse: 10px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemEmBlocoRolagemMouse.nomeFolEs, MargemEmBlocoRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                MargemEmBlocoRolagemMouse.nomeFolEs,
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
