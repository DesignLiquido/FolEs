import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioRecuoEmBloco extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["inicio-recuo-em-bloco", "início-recuo-em-bloco"],
            "padding-block-start"
        );

        validarValorNumerico('início-recuo-em-bloco', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('início-recuo-em-bloco', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
