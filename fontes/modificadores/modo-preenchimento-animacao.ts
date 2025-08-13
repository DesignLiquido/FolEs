import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoPreenchimentoAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        "para-frente": "forwards",
        "para-tras": "backwards",
        "para-trás": "backwards",
        ambos: "both",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["modo-preenchimento-animacao", "modo-preenchimento-animação"],
            "animation-fill-mode",
            pragmas,
        );

        validarValores(
            "modo-preenchimento-animação",
            valores,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
