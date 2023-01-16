import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class DeslocamentoEmAncora extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "superior": "top",
        "inferior": "bottom",
        "esquerda": "left",
        "direita": "right",
        "centro": "center",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
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
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'deslocamento-em-âncora' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
