import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RaioEsquerdoBordaSuperior extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("raio-esquerdo-borda-superior", "border-top-left-radius", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('raio-esquerdo-borda-superior', valor);

            if (Number(parseInt(valor))) {
                validarQuantificador('raio-esquerdo-borda-superior', quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
