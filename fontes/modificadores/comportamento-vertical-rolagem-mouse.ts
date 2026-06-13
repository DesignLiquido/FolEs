import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoVerticalRolagemMouse extends Modificador {
    static nomeFolEs: string = "comportamento-vertical-rolagem-mouse";
    static nomeCss: string = "overscroll-behavior-y";
    static descricao: string = 'Define o comportamento do navegador quando o limite vertical de uma área de rolagem é atingido.';
    static documentacao: string = '# `comportamento-vertical-rolagem-mouse`\nDuas palavras-chave especificam o valor nos eixos vertical e horizontal, respectivamente. Se apenas um valor for especificado, supõe-se que os dois eixos tenham o mesmo valor.';
    static exemploCodigo: string = 'divisao {\n  comportamento-vertical-rolagem-mouse: conter;\n}';

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
            ComportamentoVerticalRolagemMouse.nomeFolEs,
            ComportamentoVerticalRolagemMouse.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                ComportamentoVerticalRolagemMouse.nomeFolEs,
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
