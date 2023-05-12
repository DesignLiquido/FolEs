import { cores } from "../modificadores/atributos/cores";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { Modificador, PragmasModificador } from "../modificadores/superclasse";

export class DentroDoLimite extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
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