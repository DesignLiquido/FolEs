import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoSuperiorRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("recuo-superior-rolagem-mouse", "scroll-padding-top", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('recuo-superior-rolagem-mouse', valor, this.valoresAceitos);

            if (Number(parseInt(valor))) {
                validarQuantificador('recuo-superior-rolagem-mouse', quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
