import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoHorizontalRolagemMouse extends Modificador {
    static nomeFolEs: string = "comportamento-horizontal-rolagem-mouse";
    static nomeCss: string = "overscroll-behavior-x";
    static descricao: string = 'Define o comportamento do navegador quando o limite horizontal de uma área de rolagem é atingido.';
    static documentacao: string = '# `comportamento-horizontal-rolagem-mouse`\nDuas palavras-chave especificam o valor nos eixos vertical e horizontal, respectivamente. Se apenas um valor for especificado, supõe-se que os dois eixos tenham o mesmo valor.';
    static exemploCodigo: string = 'divisao {\n  comportamento-horizontal-rolagem-mouse: conter;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        conter: "contain",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ComportamentoHorizontalRolagemMouse.nomeFolEs,
            ComportamentoHorizontalRolagemMouse.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                ComportamentoHorizontalRolagemMouse.nomeFolEs,
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
