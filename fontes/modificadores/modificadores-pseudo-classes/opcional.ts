import { cores } from "../atributos/cores";
import { valoresGlobais } from "../atributos/globais";
import { unidadesMedida } from "../atributos/quantificadores";
import { Modificador } from "../superclasse/modificador";

export class Opcional extends Modificador {
 
   
    constructor(valor: string, quantificador?: string) {
        super("opcional", "optional");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para ser possível fazer as validações seguintes.
        const valorString = valor.toString();
        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
        !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX =  !(valorString.startsWith('#') && valorString.length <= 7);

        if (!(valor in cores) &&
            validaçõesCor &&
            validaçõesHEX &&
            Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'opcional' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, 
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'opcional' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}