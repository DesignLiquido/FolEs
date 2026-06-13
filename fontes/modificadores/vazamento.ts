import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class Vazamento extends Modificador {
    static nomeFolEs: string = "vazamento";
    static nomeCss: string = "overflow";
    static descricao: string = 'Define o comportamento quando o conteúdo de um elemento transborda de sua área.';
    static documentacao: string = '# `vazamento`\nPropriedade de atribuição abreviada que define o comportamento desejado quando o conteúdo não cabe na caixa do elemento (transborda) na direção horizontal e/ou vertical.';
    static exemploCodigo: string = 'divisao {\n  vazamento: escondido;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        recorte: "clip",
        "barra-rolagem": "scroll",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Vazamento.nomeFolEs, Vazamento.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    Vazamento.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarValores(
                    Vazamento.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
