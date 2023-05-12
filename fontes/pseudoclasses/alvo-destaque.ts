import { cores } from "../modificadores/atributos/cores";
import { estilos } from "../modificadores/atributos/estilo";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";
import { Modificador, PragmasModificador } from "../modificadores/superclasse";

export class AlvoDestaque extends Modificador {

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("alvo-destaque", "target-within");

        if (Number.isNaN(parseInt(valor)) &&

            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGerais)) {
            throw new Error(`Propriedade 'alvo-destaque' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGerais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'alvo-destaque' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}