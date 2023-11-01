import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Coordenadas extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("coordenadas", "translate", pragmas);

        // Aceita de 1 a 3 valores;
        // A lógica abaixo cobre o recebimento de UM único valor.

        validarValorNumerico('coordenadas', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('coordenadas', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
