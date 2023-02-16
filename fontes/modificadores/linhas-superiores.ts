import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class LinhasSuperiores extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("linhas-superiores", "widows");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'linhas-superiores' com valor ${valor} inválido. Valor deve ser numérico ou um dos valores:
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // Logo, deve retornar um erro se recebido um segundo parâmetro. 
        if (quantificador !== undefined) {
            throw new Error(
                `Propriedade 'linhas-superiores' aceita somente valores numéricos. O quantificador ${quantificador} é inválido para esta operação.`);
        }
    }
}
