import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Tabulacao extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["tabulacao", "tabulação"], "tab-size", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('tabulação', valor)

            if (quantificador !== undefined) {
                validarQuantificador('tabulação', quantificador, comprimentos);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
