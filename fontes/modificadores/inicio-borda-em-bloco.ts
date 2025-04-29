import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioBordaEmBloco extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["inicio-borda-em-bloco", "início-borda-em-bloco"],
            "border-block-start",
            pragmas,
        );

        if (!valorVariavel) {
            validarMultiplosQualitativos("início-borda-em-bloco", valor);

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "início-borda-em-bloco",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
