import { cores } from "../modificadores/atributos/cores";
import { valoresGlobais } from "../modificadores/atributos/globais";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";

export class Habilitado extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super( "habilitado","enabled" );

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
            throw new Error(`Propriedade 'habilitado' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
    
        
    }
}