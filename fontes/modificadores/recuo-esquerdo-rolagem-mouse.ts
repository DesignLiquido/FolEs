import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEsquerdoRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recuo-esquerdo-rolagem-mouse", "scroll-padding-left", pragmas);

        validarValorNumerico('recuo-esquerdo-rolagem-mouse', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('recuo-esquerdo-rolagem-mouse', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
