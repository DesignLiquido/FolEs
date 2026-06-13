import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class ComportamentoRolagemMouse extends Modificador {
    static nomeFolEs: string = "comportamento-rolagem-mouse";
    static nomeCss: string = "overscroll-behavior";
    static descricao: string = 'Define o que um navegador faz ao atingir o limite de uma área de rolagem.';
    static documentacao: string = '# `comportamento-rolagem-mouse`\nPropriedade de atribuição abreviada para definir os valores dos eixos horizontal e vertical do bloco de rolagem do mouse';
    static exemploCodigo: string = 'p {\n  comportamento-rolagem-mouse: auto;\n}';

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
        super(ComportamentoRolagemMouse.nomeFolEs, ComportamentoRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    ComportamentoRolagemMouse.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarValores(
                    ComportamentoRolagemMouse.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
