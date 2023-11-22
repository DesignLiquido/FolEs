import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Espacamento extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["espacamento", "espaçamento"], "gap", pragmas);

        validarValorNumerico('espaçamento', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('espaçamento', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
