import { cores } from "../atributos/cores";
import { valoresGlobais } from "../atributos/globais";
import { Modificador } from "../superclasse/modificador";

export class LinkLocal extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("link-local", "local-link");

        const valorString = valor.toString();

        if (!(valor in cores) &&
            !(valor in valoresGlobais) &&
            !(valorString.includes('rgb')) &&
            !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) &&
            !(valorString.startsWith('#') && valorString.length <= 7) 
        ) {
            throw new Error(`Propriedade 'link-local' com valor ${valor} inválido. Valores aceitos:
            rgb, rgba, hsl, #HEX,
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

    }
}