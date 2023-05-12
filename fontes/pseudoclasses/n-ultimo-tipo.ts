import { cores } from "../modificadores/atributos/cores";
import { estilos } from "../modificadores/atributos/estilo";
import { valoresGlobais} from "../modificadores/atributos/globais";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class NUltimoTipo extends Pseudoclasse {
    valoresAceitos: { [valorFoles: string]: string } = {
    "n-ultimo-tipo":"nth-last-of-type",
    "n-último-tipo":"nth-last-of-type",
    "impar":"odd",
    "ímpar":"odd",
    "par":"even"
    }

    constructor(pragmas?: PragmasPseudoclasse) {
        super("n-ultimo-tipo", "nth-of-type");
     
        if (Number.isNaN(parseInt(valor)) &&
        !(valor in this.valoresAceitos)&&
            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'n-ultimo-tipo' com valor ${valor} inválido. Valores aceitos: 
            
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'n-ultimo-tipo' com quantificador inválido. Valores aceitos:
                número-quantificador, 
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}