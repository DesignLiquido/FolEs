import { cores } from "../modificadores/atributos/cores";
import { estilos } from "../modificadores/atributos/estilo";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";
import { Modificador, PragmasModificador } from "../modificadores/superclasse";

export class Reproduzir extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 3 valores.
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("reproduzir", "playing");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para ser possível fazer as validações seguintes.
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
            throw new Error(`Propriedade 'playing' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGerais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'playing' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}


