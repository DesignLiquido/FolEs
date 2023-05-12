import { cores } from "../modificadores/atributos/cores";
import { valoresGlobais } from "../modificadores/atributos/globais";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Escopo extends Pseudoclasse {

    constructor(valor: string, quantificador?: string, pragmas?: PragmasPseudoclasse) {
        super("escopo", "scope");

        if (!(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'escopo' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;
    }
}