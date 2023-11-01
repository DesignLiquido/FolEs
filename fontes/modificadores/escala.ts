import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Escala extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("escala", "scale", pragmas);

        // Pode receber de 1 a 4 parâmetros
        // A lógica abaixo cobre somente o recebimento de UM único valor. 

        // TODO: Adaptar lógica para cobrir todos os casos.

        validarValorNumerico('escala', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('escala', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
