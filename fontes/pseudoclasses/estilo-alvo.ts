import { cores } from "../modificadores/atributos/cores";
import { estilos } from "../modificadores/atributos/estilo";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";
import { Modificador, PragmasModificador } from "../modificadores/superclasse";

export class EstiloAlvo extends Modificador {

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("estilo-alvo", "target");

        if (Number.isNaN(parseInt(valor)) &&

            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGerais)) {
            throw new Error(`Propriedade 'estilo-alvo' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGerais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'estilo-alvo' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}