import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoInferior extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recuo-inferior", "padding-bottom", pragmas);

        validarValorNumerico('recuo-inferior', valor);

        this.valor = valor;

        // O seletor aceita o número 0.
        // Logo, o código só passa pela validação caso haja um segundo parâmetro
        // ou caso o primeiro seja diferente de 0.
        if (quantificador !== undefined && valor !== '0') {
            validarQuantificador('recuo-inferior', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
