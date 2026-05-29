import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RepetirAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        infinito: "infinite",
    };

    static nomeCss: string = "animation-iteration-count";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["repetir-animacao", "repetir-animação"],
            RepetirAnimacao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "repetir-animação",
                valores,
                this.valoresAceitos,
                null,
                null,
                true
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
