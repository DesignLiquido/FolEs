import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
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
                validarAtribuicaoAbreviada("numérica", "raio-borda", valor);
            } else {
                validarValorNumerico("raio-borda", valor);
            }

            if (quantificador !== undefined) {
                validarQuantificador("raio-borda", quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
