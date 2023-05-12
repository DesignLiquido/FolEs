import { cores } from "./atributos/cores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class CorBorda extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("cor-borda", "border-color");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para ser possível fazer as validações seguintes.
        const valorString = valor.toString();
        
        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
        !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX =  !(valorString.startsWith('#') && valorString.length <= 7);

        if (!(valor in cores) &&
            validaçõesCor &&
            validaçõesHEX &&
            !(valorString.startsWith('#') && valorString.length <= 7) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'cor-borda' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
