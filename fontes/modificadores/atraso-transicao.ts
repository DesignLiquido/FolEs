import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class AtrasoTransicao extends Modificador {
    static nomeFolEs: string[] = ["atraso-transicao", "atraso-transição"];
    static nomeCss: string = "transition-delay";
    static descricao: string = 'Especifica o tempo de espera antes de iniciar o efeito de transição.';
    static documentacao: string = '# `atraso-transicao`\nA transição é geralmente aplicada a uma propriedade quando seu valor muda. Você pode especificar vários atrasos, o que é útil ao fazer a transição de várias propriedades. Cada atraso será aplicado à propriedade correspondente conforme especificado pela `propriedade-transição';
    static exemploCodigo: string = 'imagem {\n  atraso-transicao: 2s;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            AtrasoTransicao.nomeFolEs,
            AtrasoTransicao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    AtrasoTransicao.nomeFolEs[1],
                    valores,
                    null,
                    null,
                    valoresTemporais
                );
            } else {
                validarValorNumerico(
                    AtrasoTransicao.nomeFolEs[1],
                    valores,
                    null,
                    null,
                    valoresTemporais
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
