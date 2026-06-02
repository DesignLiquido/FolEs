import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemSuperiorRolagemMouse extends Modificador {
    static nomeFolEs: string = "margem-superior-rolagem-mouse";
    static nomeCss: string = "scroll-margin-top";
    static descricao: string = 'Define a margem superior da área de ajuste da barra de rolagem da página.';
    static documentacao: string = '# `margem-superior-rolagem-mouse`\nA área de ajuste de rolagem é determinada a partir da borda do elemento, encontrando o limite da sua área e adicionando os ajustes especificados.';
    static exemploCodigo: string = 'corpo {\n  margem-superior-rolagem-mouse: 10px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemSuperiorRolagemMouse.nomeFolEs, MargemSuperiorRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                MargemSuperiorRolagemMouse.nomeFolEs,
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
