import { cores } from "../modificadores/atributos/cores";
import { estilos } from "../modificadores/atributos/estilo";
import { valoresGlobais } from "../modificadores/atributos/globais";
import { ListaDeValoresAbsolutos } from "../modificadores/atributos/quantificadores";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class IdiomaGlobal extends Pseudoclasse {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 3 valores.

    constructor(pragmas?: PragmasPseudoclasse) {
        super("idioma-global", "lang");
        const valorString = valor.toString();

        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX = !(valorString.startsWith('#') && valorString.length <= 7);

        if (Number.isNaN(parseInt(valor)) &&
            validaçõesCor &&
            validaçõesHEX &&
            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'idioma-global' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in ListaDeValoresAbsolutos) || quantificador === undefined) {
                throw new Error(`Propriedade 'idioma-global' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValoresAbsolutos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}