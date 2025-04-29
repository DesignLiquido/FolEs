import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class FimBordaEmLinha extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("fim-borda-em-linha", "border-inline-end", pragmas);

        if (!valorVariavel) {
            validarMultiplosQualitativos("fim-borda-em-linha", valor);

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "fim-borda-em-linha",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
