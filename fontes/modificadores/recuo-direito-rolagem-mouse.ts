import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoDireitoRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("recuo-direito-rolagem-mouse", "scroll-padding-right", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('recuo-direito-rolagem-mouse', valor, this.valoresAceitos);

            if (Number(parseInt(valor))) {
                validarQuantificador('recuo-direito-rolagem-mouse', quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
