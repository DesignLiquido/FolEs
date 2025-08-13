import { Valor } from "../valores";
import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VelocidadeAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "velocidade-normal": "ease",
        linear: "linear",
        "inicio-lento": "ease-in",
        "início-lento": "ease-in",
        "final-lento": "ease-out",
        "inicio-final-lento": "ease-in-out",
        "início-final-lento": "ease-in-out",
        "passo-inicial": "step-start",
        "passo-final": "step-start",
        "salto-inicial": "jump-start",
        "salto-final": "jump-end",
        "salto-nenhum": "jump-none",
        "salto-conjunto": "jump-both",
        inicial: "start",
        final: "end",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["velocidade-animacao", "velocidade-animação"],
            "animation-timing-function",
            pragmas,
        );

        const valoresExtra = ["cubic-bezier", "steps"];

        validarValores(
            "velocidade-animação",
            valores,
            this.valoresAceitos,
            valoresExtra,
        );

        this.valores = valores;
    }
}
