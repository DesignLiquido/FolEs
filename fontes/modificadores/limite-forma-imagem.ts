import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class LimiteFormaImagem extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("limite-forma-imagem", "shape-image-threshold");

        // Valor numérico deve estar entre 0 e 1 (<alpha-value>).
        if ((Number(parseInt(valor)) < 0 || Number(parseInt(valor)) > 1) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'limite-forma-imagem' com valor ${valor} inválido. O valor deve estar entre 0 e 1 ou ser um dos valores:
                ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // Logo, deve retornar um erro se recebido um segundo parâmetro. 
        if (quantificador !== undefined) {
            throw new Error(
                `Propriedade 'limite-forma-imagem' aceita somente valores numéricos. O quantificador ${quantificador} é inválido para esta operação.`);
        }
    }
}
