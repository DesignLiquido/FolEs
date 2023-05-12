import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class LinhasInferiores extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("linhas-inferiores", "orphans");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'linhas-inferiores' com valor ${valor} inválido. Valor deve ser numérico ou um dos valores:
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // Logo, deve retornar um erro se recebido um segundo parâmetro. 
        if (quantificador !== undefined) {
            throw new Error(
                `Propriedade 'linhas-inferiores' aceita somente valores numéricos. O quantificador ${quantificador} é inválido para esta operação.`);
        }
    }
}
