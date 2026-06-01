import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorCor } from "./validacoes/cor";

export class CorBorda extends Modificador {
    static nomeFolEs: string = "cor-borda";
    static nomeCss: string = "border-color";
    static descricao: string = 'Define a cor da borda de um elemento.';
    static documentacao: string = '# `cor-borda`\nPropriedade de atribuição abreviada para definir os valores de cor de todas as bordas de um elemento utilizando somente uma propriedade.';
    static exemploCodigo: string = 'campo {\n  cor-borda: vermelho amarelo verde azul;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorBorda.nomeFolEs, CorBorda.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "cor",
                    CorBorda.nomeFolEs,
                    valores
                );
            } else {
                validarValorCor(
                    CorBorda.nomeFolEs,
                    valores,
                    null
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
