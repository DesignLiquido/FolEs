import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class FormaMargem extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("forma-margem", "shape-margin", pragmas);

        validarValorNumerico('forma-margem', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('forma-margem', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
