import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioRecuoEmLinha extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["inicio-recuo-em-linha", "início-recuo-em-linha"],
            "padding-inline-start", 
            pragmas
        );

        validarValorNumerico('início-recuo-em-linha', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('início-recuo-em-linha', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
