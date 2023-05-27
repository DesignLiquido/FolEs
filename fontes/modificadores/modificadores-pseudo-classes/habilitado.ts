import { cores } from "../atributos/cores";
import { valoresGlobais } from "../atributos/globais";
import { Modificador } from "../superclasse/modificador";
import { unidadesMedida } from "../atributos/quantificadores";

export class Habilitado extends Modificador {
    constructor(valor: string, quantificador?: string) {
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