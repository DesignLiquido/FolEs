import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEmLinha extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("recuo-em-linha", "padding-inline", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('recuo-em-linha', valor);

            if (Number(parseInt(valor))) {
                validarQuantificador('recuo-em-linha', quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
