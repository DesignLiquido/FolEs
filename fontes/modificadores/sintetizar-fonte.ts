import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class SintetizarFonte extends Modificador {
    static nomeFolEs: string = "sintetizar-fonte";
    static nomeCss: string = "font-synthesis";
    static descricao: string = 'Define as fontes a serem sintetizadas pelo navegador.';
    static documentacao: string = '# `sintetizar-fonte`\nPropriedade que controla quais tipos de letra (negrito, itálico ou maiúsculas pequenas) podem ser sintetizados pelo navegador.';
    static exemploCodigo: string = 'p {\n  sintetizar-fonte: itálico;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        "em-negrito": "weight",
        italica: "style",
        itálica: "style",
        "maiusculas-pequenas": "small-caps",
        "maiúsculas-pequenas": "small-caps",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(SintetizarFonte.nomeFolEs, SintetizarFonte.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    SintetizarFonte.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarValores(
                    SintetizarFonte.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
