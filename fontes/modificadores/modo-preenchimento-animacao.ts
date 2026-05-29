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

    static nomeCss: string = "animation-fill-mode";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["modo-preenchimento-animacao", "modo-preenchimento-animação"],
            ModoPreenchimentoAnimacao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "modo-preenchimento-animação",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
