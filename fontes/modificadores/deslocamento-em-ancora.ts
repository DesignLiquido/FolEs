import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class DeslocamentoEmAncora extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "superior": "top",
        "inferior": "bottom",
        "esquerda": "left",
        "direita": "right",
        "centro": "center",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["deslocamento-em-ancora", "deslocamento-em-âncora"],
            "offset-anchor"
        );

        // Pode receber de 1 a 4 valores;
        // Para os casos de múltiplos valores, o modificador também aceita número-quantificador.
        // Ex.1: deslocamento-em-âncora: 25% 75%;
        // Ex.2: deslocamento-em-âncora: inferior 10px direita 20px;

        // A lógica abaixo cobre apenas o recebimento de UM único valor.
        // TODO: Adaptar lógica futuramente para cobrir todos os casos. 
        if (!(valor in this.valoresAceitos) &&
            Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'deslocamento-em-âncora' com valor ${valor} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'deslocamento-em-âncora' com quantificador ${quantificador} inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
