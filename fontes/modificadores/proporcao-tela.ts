import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class ProporcaoTela extends Modificador {
    static nomeFolEs: string[] = ["proporcao-tela", "proporção-tela"];
    static nomeCss: string = "aspect-ratio";
    static descricao: string = 'Define uma proporção para um referido bloco.';
    static documentacao: string = '# `proporcao-tela`\nEsta propriedade especifica a proporção que será usada no cálculo de tamanhos automáticos e algumas outras funções de layout.';
    static exemploCodigo: string = 'p {\n  proporcao-tela: 1;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ProporcaoTela.nomeFolEs, ProporcaoTela.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    ProporcaoTela.nomeFolEs[1],
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarValorNumerico(
                    ProporcaoTela.nomeFolEs[1],
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
