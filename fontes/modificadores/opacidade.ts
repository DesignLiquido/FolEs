import { valoresGlobais } from "./atributos/globais";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Opacidade extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("opacidade", "opacity");

        // Valor numérico deve estar entre 0 e 1 (<alpha-value>).
        // Caso haja um quantificador %, pode ser qualquer número. 
        validarValorNumerico('opacidade', valor);

        this.valor = valor;

        // Se há valor numérico maior do que 1, aceita o quantificador percentual.
        if (quantificador !== undefined && Number(parseInt(valor)) > 1) {
            validarQuantificador('opacidade', quantificador, ListaDeValorPercentual);

            this.quantificador = quantificador;
        }
    }
}
