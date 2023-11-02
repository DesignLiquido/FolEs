import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RaioDireitoBordaSuperior extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("raio-direito-borda-superior", "border-top-right-radius", pragmas);

        // Pode receber também dois valores número-quantificador
        // Ex.: raio-direito-borda-superior: 20% 20%;
        // A lógica abaixo cobre apenas o recebimento de UM único valor
        // TODO: Adaptar lógica para cobrir o recebimento de múltiplos valores

        validarValorNumerico('raio-direito-borda-superior', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('raio-direito-borda-superior', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
