import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoDireitoRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recuo-direito-rolagem-mouse", "scroll-padding-right", pragmas);

        validarValorNumerico('recuo-direito-rolagem-mouse', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('recuo-direito-rolagem-mouse', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
