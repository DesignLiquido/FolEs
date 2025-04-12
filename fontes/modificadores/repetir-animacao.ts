import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class RepetirAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        infinito: "infinite",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["repetir-animacao", "repetir-animação"],
            "animation-iteration-count",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico(
                "repetir-animação",
                valor,
                this.valoresAceitos,
            );

            proibirQuantificador("repetir-animação", quantificador);
        }

        this.valor = valor;
    }
}
