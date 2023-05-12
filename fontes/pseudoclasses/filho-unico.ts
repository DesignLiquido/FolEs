import { cores } from "../modificadores/atributos/cores";
import { estilos } from "../modificadores/atributos/estilo";
import { valoresGlobais} from "../modificadores/atributos/globais";
import { Modificador, PragmasModificador } from "../modificadores/superclasse";

export class FilhoUnico extends Modificador {

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("filho-unico", "only-child");
     
        if (!(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'filho-unico' com valor ${valor} inválido. Valores aceitos: 
            
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

    }
}
