import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class DuracaoAnimacao extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["duracao-animacao", "duração-animação"],
            "animation-duration",
            pragmas,
        );

        if (!valorVariavel) {
            if (valor.includes(",")) {
                const separarValores = valor.split(", ");

                separarValores.forEach((valorIndividual) => {
                    validarValorNumerico("duração-animação", valorIndividual);
                });
            } else {
                validarValorNumerico("duração-animação", valor);
            }

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "duração-animação",
                    quantificador,
                    valoresTemporais,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
