import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioBordaEmLinha extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["inicio-borda-em-linha", "início-borda-em-linha"],
            "border-inline-start",
            pragmas,
        );

        if (!valorVariavel) {
            validarMultiplosQualitativos("início-borda-em-linha", valor);

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "início-borda-em-linha",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
