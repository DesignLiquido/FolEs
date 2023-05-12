import { cores } from "../modificadores/atributos/cores";
import { estilos } from "../modificadores/atributos/estilo";
import { valoresGlobais} from "../modificadores/atributos/globais";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class NUltimoFilho extends Pseudoclasse {
    valoresAceitos: { [valorFoles: string]: string } = {
        "impar":"odd",
        "ímpar":"odd",
        "par":"even"
 
     }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasPseudoclasse) {
        super("n-último-filho", "nth-last-child");
     
        if (Number.isNaN(parseInt(valor)) &&
           
            !(valor in estilos) &&
            !(valor in this.valoresAceitos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'n-último-filho' com valor ${valor} inválido. Valores aceitos: 
            
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'n-último-filho' com quantificador inválido. Valores aceitos:
                número-quantificador, 
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}