import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEmLinhaFim extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("recuo-em-linha-fim", "padding-inline-end", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('recuo-em-linha-fim', valor);

            if (Number(parseInt(valor))) {
                validarQuantificador('recuo-em-linha-fim', quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
