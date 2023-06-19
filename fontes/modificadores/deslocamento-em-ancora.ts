import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

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
        validarValorNumerico('deslocamento-em-âncora', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('deslocamento-em-âncora', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
