import { valoresGlobais } from "./atributos/globais";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class Opacidade extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("opacidade", "opacity");

        // Valor numérico deve estar entre 0 e 1 (<alpha-value>).
        // Caso haja um quantificador %, pode ser qualquer número. 
        if ((Number(parseInt(valor)) < 0 || Number(parseInt(valor)) > 1) &&
            quantificador === undefined && 
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'opacidade' com valor ${valor} inválido. O valor deve estar entre 0 e 1 ou ser um dos valores:
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Se há valor numérico maior do que 1, aceita o quantificador percentual.
        if (quantificador !== undefined) {
            if (
                !(quantificador in ListaDeValorPercentual)
            ) {
                throw new Error(
                    `Propriedade 'opacidade' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
