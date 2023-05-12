
import { cores } from "../modificadores/atributos/cores";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Foco extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("foco", "focus");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para não ocorrer esse problema.
        const valorString = valor.toString();

        if (!(valor in cores) &&
            !(valor in valoresGerais) &&
            !(valorString.includes('rgb')) &&
            !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) &&
            !(valorString.startsWith('#') && valorString.length <= 7) 
        ) {
            throw new Error(`Propriedade 'foco' com valor ${valor} inválido. Valores aceitos:
            rgb, rgba, hsl, #HEX,
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGerais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        
    }
}
