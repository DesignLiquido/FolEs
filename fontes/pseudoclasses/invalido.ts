import { cores } from "../modificadores/atributos/cores";
import { valoresGerais} from "../modificadores/atributos/gerais";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Invalido extends Pseudoclasse {

     valoresAceitos: { [valorFoles: string]: string } = {
       
            "inválido": "invalid",
            "invalido": "invalid",
            
        }

    constructor(pragmas?: PragmasPseudoclasse) {

       
        super("invalido", "invalid");
        if (Number.isNaN(parseInt(valor)) && 
        !(valor in this.valoresAceitos) &&
            !(valor in cores) &&
            !(valor in valoresGerais)) {
            throw new Error(`Propriedade 'invalid' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, 
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGerais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'invalido' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}