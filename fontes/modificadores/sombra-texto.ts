import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class SombraTexto extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("sombra-texto", "text-shadow", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("sombra-texto", valor);

            if (quantificador !== undefined) {
                validarQuantificador(
                    "sombra-texto",
                    quantificador,
                    unidadesMedida,
                );
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
