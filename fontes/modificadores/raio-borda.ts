import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RaioBorda extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("raio-borda", "border-radius", pragmas);

        if (!valorVariavel) {
            if (valor.includes("/")) {
                let separarValores = valor
                    .replace(`/${quantificador}/g`, "")
                    .split(" / ");

                separarValores.forEach((valorIndividual) => {
                    validarValorNumerico("raio-borda", valorIndividual);
                });
            } else {
                validarValorNumerico("raio-borda", valor);
            }

            if (quantificador !== undefined) {
                validarQuantificador(
                    "raio-borda",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
