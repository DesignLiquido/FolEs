import { cores } from "../modificadores/atributos/cores";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class DentroDoLimite extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("dentro-do-limite", "in-range");
        const valorString = valor.toString();

        if (!(valor in cores) &&
            !(valor in valoresGerais) &&
            !(valorString.includes('rgb')) &&
            !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) &&
            !(valorString.startsWith('#') && valorString.length <= 7) 
        ) {
            throw new Error(`Propriedade 'dentro-do-limite' com valor ${valor} inválido. Valores aceitos:
            rgb, rgba, hsl, #HEX,
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGerais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

    }
}