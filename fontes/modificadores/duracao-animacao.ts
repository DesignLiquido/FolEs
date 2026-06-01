import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class DuracaoAnimacao extends Modificador {
    static nomeFolEs: string[] = ["duracao-animacao", "duração-animação"];
    static nomeCss: string = "animation-duration";
    static descricao: string = 'Define o tempo que uma animação leva para completar um ciclo.';
    static documentacao: string = '# `duracao-animacao`\nO tempo que uma animação leva para completar um ciclo pode ser especificado em segundos (s), milissegundos (ms) ou com o valor auto. Em caso de valor numérico, esse deve ser positivo ou zero e a unidade de tempo é obrigatória.';
    static exemploCodigo: string = 'p {\n  duracao-animacao: 3s linear 1s deslizar;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DuracaoAnimacao.nomeFolEs,
            DuracaoAnimacao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    DuracaoAnimacao.nomeFolEs[1],
                    valores,
                    null,
                    null,
                    valoresTemporais
                );
            } else {
                validarValorNumerico(
                    DuracaoAnimacao.nomeFolEs[1],
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
