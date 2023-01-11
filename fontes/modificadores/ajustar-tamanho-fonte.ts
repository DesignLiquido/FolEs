import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class AjustarTamanhoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "altura-ex": "ex-height",
        "altura-cap": "cap-height",
        "largura-ch": "ch-width",
        "largura-ic": "ic-width",
        "altura-ic": "ic-height",
    }

    constructor(valor: string, quantificador?: string) {
        super("ajustar-tamanho-fonte", "font-size-adjust");

        // OBS.: Os valores listados só são válidos quando há DOIS valores atribuídos.
        // Ex.: ajustar-tamanho-fonte: altura-cap 0.5;
        // TODO: Implementar lógica restante no futuro, tendo em vista a estrutura do Av.Sintático.
 
        // A lógica abaixo cobre somente o recebimento de UM valor numérico.
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'ajustar-tamanho-fonte' com valor ${valor} inválido. Valor deve ser numérico ou um dos valores:
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }   

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // Logo, deve retornar um erro se recebido um segundo parâmetro. 
        if (quantificador !== undefined) {
            throw new Error(
                `Propriedade 'ajustar-tamanho-fonte' aceita somente valores numéricos. O quantificador ${quantificador} é inválido para esta operação.`);
        }
    }
}