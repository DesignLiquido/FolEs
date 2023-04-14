
import { estilos } from "../atributos/estilo";
import { valoresGerais } from "../atributos/gerais";
import { unidadesMedida } from "../atributos/quantificadores";
import { Modificador } from "../superclasse/modificador";

export class FocoVisivel extends Modificador {

    constructor(valor: string, quantificador?: string) {
        super("foco-visivel", "focus-visible");

        if (Number.isNaN(parseInt(valor)) &&

            !(valor in estilos) &&
            !(valor in valoresGerais)) {
            throw new Error(`Propriedade 'foco-visivel' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGerais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'foco-visivel' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}