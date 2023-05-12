import { cores } from "./atributos/cores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class RegrasCorColuna extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("regras-cor-coluna", "column-rule-color");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para não ocorrer esse problema.
        const valorString = valor.toString();

        if (!(valor in cores) &&
            !(valor in valoresGlobais) &&
            !(valorString.includes('rgb')) &&
            !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) &&
            !(valorString.startsWith('#') && valorString.length <= 7) 
        ) {
            throw new Error(`Propriedade 'regras-cor-coluna' com valor ${valor} inválido. Valores aceitos:
            rgb, rgba, hsl, #HEX,
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
