import { cores } from "../modificadores/atributos/cores";
import { valoresGlobais } from "../modificadores/atributos/globais";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";

export class Vazio extends Pseudoclasse {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasPseudoclasse) {
        super( "vazio","empty" );

        const valorString = valor.toString();

        if (!(valor in cores) &&
      
            !(valor in valoresGlobais) &&
            !(valorString.includes('rgb')) &&
            !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) &&
            !(valorString.startsWith('#') && valorString.length <= 7) 
        ) {
            throw new Error(`Propriedade 'vazio' com valor ${valor} inválido. Valores aceitos:
            rgb, rgba, hsl, #HEX,
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
        
        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'vazio' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
        
    }
}