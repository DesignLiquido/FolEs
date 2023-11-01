import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Colunas extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 2 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("colunas", "columns", pragmas);

        validarValorNumerico('colunas', valor, this.valoresAceitos);

        this.valor = valor;

        if (quantificador !== undefined) {
            validarQuantificador('colunas', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
