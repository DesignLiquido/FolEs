import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EventosPonteiro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("eventos-ponteiro", "pointer-events");
        
        // Também pode receber valores do tipo SVG
        // Conferir em: https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events

        // TODO: Ajustar lógica para cobrir todos os casos de atribuição de valor.

        validarValores('eventos-ponteiro', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
