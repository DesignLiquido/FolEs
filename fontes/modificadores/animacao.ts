import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Animacao extends Modificador {
    static nomeFolEs: string[] = ["animacao", "animação"];
    static nomeCss: string = "animation";
    static descricao: string = 'Define a animação a ser aplicada a um elemento da aplicação.';
    static documentacao: string = '# `animação`\nPropriedade de atribuição abreviada para definir os valores de todas as propriedades de animação utilizando apenas uma propriedade.';
    static exemploCodigo: string = 'p {\n  animação: 3s linear 1s deslizar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        reverter: "reverse",
        alternar: "alternate",
        "alternar-reverter": "alternate-reverse",
        infinito: "infinite",
        nenhum: "none",
        "para-frente": "forwards",
        "para-tras": "backwards",
        "para-trás": "backwards",
        ambos: "both",
        executando: "running",
        pausada: "paused",
        deslizar: "slidein",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Animacao.nomeFolEs, Animacao.nomeCss, pragmas);

        const valoresExtra = ["linear", "cubic-bezier", "steps"];

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    Animacao.nomeFolEs[1],
                    valores,
                    this.valoresAceitos,
                    valoresExtra
                );
            } else {
                validarValorNumerico(
                    Animacao.nomeFolEs[1],
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
