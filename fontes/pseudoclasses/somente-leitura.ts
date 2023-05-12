import { cores } from "../modificadores/atributos/cores";
import { estilos } from "../modificadores/atributos/estilo";
import { valoresGerais } from "../modificadores/atributos/gerais";


import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class SomenteLeitura extends Pseudoclasse {
   
    constructor(valor: string, quantificador?: string, pragmas?: PragmasPseudoclasse) {
        super("somente-leitura", "read-only");

     
        const valorString = valor.toString();

        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX = !(valorString.startsWith('#') && valorString.length <= 7);

        if (Number.isNaN(parseInt(valor)) &&
            validaçõesCor &&
            validaçõesHEX &&
            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGerais)) {
            throw new Error(`Propriedade 'somente-leitura' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGerais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

      
    }
}
