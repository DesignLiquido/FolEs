import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Animacao extends Modificador {
    // Atribuição Abreviada: Esse seletor pode receber de 2 a 8 valores.
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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["animacao", "animação"], "animation", pragmas);

        const valoresExtra = ["linear", "cubic-bezier", "steps"];

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("numérica", "animação", valor, this.valoresAceitos, valoresExtra);
            } else {
                validarValorNumerico(
                    "animação",
                    valor,
                    this.valoresAceitos,
                    valoresExtra,
                );
            }
        }
        this.valor = valor;
    }
}
