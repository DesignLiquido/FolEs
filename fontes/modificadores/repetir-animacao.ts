import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class RepetirAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        infinito: "infinite",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["repetir-animacao", "repetir-animação"],
            "animation-iteration-count",
            pragmas,
        );

        validarValorNumerico(
            "repetir-animação",
            valores,
            this.valoresAceitos,
        );

        // TODO: Repensar
        // proibirQuantificador("repetir-animação", quantificador);

        this.valores = valores;
    }
}
