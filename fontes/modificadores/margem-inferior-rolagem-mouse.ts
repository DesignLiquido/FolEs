import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemInferiorRolagemMouse extends Modificador {
    static nomeFolEs: string = "margem-inferior-rolagem-mouse";
    static nomeCss: string = "scroll-margin-bottom";
    static descricao: string = 'Define a margem inferior da área de ajuste da barra de rolagem da página.';
    static documentacao: string = '# `margem-inferior-rolagem-mouse`\nA área de ajuste de rolagem é determinada a partir da borda do elemento, encontrando o limite da sua área e adicionando os ajustes especificados.';
    static exemploCodigo: string = 'corpo {\n  margem-inferior-rolagem-mouse: 10px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemInferiorRolagemMouse.nomeFolEs, MargemInferiorRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                MargemInferiorRolagemMouse.nomeFolEs,
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
