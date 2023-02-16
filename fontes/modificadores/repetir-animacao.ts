import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class RepetirAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "infinito": "infinite",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["repetir-animacao", "repetir-animação"],
            "animation-iteration-count"
        );

        // Aceita somente 'infinito' e valores numéricos
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'repetir-animação' com valor ${valor} inválido. Valor deve ser numérico ou um dos valores:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // Logo, deve retornar um erro se recebido um segundo parâmetro. 
        if (quantificador !== undefined) {
            throw new Error(
                `Propriedade 'repetir-animação' aceita somente valores numéricos. O quantificador ${quantificador} é inválido para esta operação.`);
        }
    }
}
