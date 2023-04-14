import { cores } from "../atributos/cores";
import { valoresGlobais } from "../atributos/globais";
import { Modificador } from "../superclasse/modificador";

export class Sobrepor extends Modificador {
   
    constructor(valor: string, quantificador?: string) {
        super("sobrepor", "hover");
        const valorString = valor.toString();

        if (!(valor in cores) &&
            !(valor in valoresGlobais) &&
            !(valorString.includes('rgb')) &&
            !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) &&
            !(valorString.startsWith('#') && valorString.length <= 7)
        ) {
            throw new Error(`Propriedade 'hover' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
    }
}