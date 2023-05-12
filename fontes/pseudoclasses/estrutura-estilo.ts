import { cores } from "../modificadores/atributos/cores";
import { valoresGlobais } from "../modificadores/atributos/globais";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";

export class EstruturaEstilo extends Pseudoclasse {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasPseudoclasse) {
        super( "estrutura-estilo","root" );

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
            throw new Error(`Propriedade 'estrutura-estilo' com valor ${valor} inválido. Valores aceitos:
            rgb, rgba, hsl, #HEX,
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
        
        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'estrutura-estilo' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
        
    }
}