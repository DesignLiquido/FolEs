import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Animacao extends Modificador {
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
        pragmas?: PragmasModificador
    ) {
        super(["animacao", "animação"], "animation", pragmas);

        const valoresExtra = ["linear", "cubic-bezier", "steps"];

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica",
                "animação",
                valores,
                this.valoresAceitos,
                valoresExtra
            );
        } else {
            validarValorNumerico(
                "animação",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
    }
}
