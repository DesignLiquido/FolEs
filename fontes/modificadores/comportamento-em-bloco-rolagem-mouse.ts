import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoEmBlocoRolagemMouse extends Modificador {
    static nomeFolEs: string = "comportamento-em-bloco-rolagem-mouse";
    static nomeCss: string = "overscroll-behavior-block";
    static descricao: string = 'Define o comportamento do navegador quando o limite de direção do bloco de uma área de rolagem é atingido.';
    static documentacao: string = '# `comportamento-em-bloco-rolagem-mouse`\nDuas palavras-chave especificam o valor nos eixos vertical e horizontal, respectivamente. Se apenas um valor for especificado, supõe-se que os dois eixos tenham o mesmo valor.';
    static exemploCodigo: string = 'divisao {\n  comportamento-em-bloco-rolagem-mouse: conter;\n}';

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
            ComportamentoEmBlocoRolagemMouse.nomeFolEs,
            ComportamentoEmBlocoRolagemMouse.nomeCss,
            pragmas
        );

        if (!variavel) {
            validarValores(
                ComportamentoEmBlocoRolagemMouse.nomeFolEs,
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
