import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEsquerdaRolagemMouse extends Modificador {
    static nomeFolEs: string = "margem-esquerda-rolagem-mouse";
    static nomeCss: string = "scroll-margin-left";
    static descricao: string = 'Define a margem esquerda da área de ajuste da barra de rolagem da página.';
    static documentacao: string = '# `margem-esquerda-rolagem-mouse`\nA área de ajuste de rolagem é determinada a partir da borda do elemento, encontrando o limite da sua área e adicionando os ajustes especificados.';
    static exemploCodigo: string = 'corpo {\n  margem-esquerda-rolagem-mouse: 10px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemEsquerdaRolagemMouse.nomeFolEs, MargemEsquerdaRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                MargemEsquerdaRolagemMouse.nomeFolEs,
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
