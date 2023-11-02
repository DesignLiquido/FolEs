import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoSuperiorRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recuo-superior-rolagem-mouse", "scroll-padding-top", pragmas);

        validarValorNumerico('recuo-superior-rolagem-mouse', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('recuo-superior-rolagem-mouse', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
