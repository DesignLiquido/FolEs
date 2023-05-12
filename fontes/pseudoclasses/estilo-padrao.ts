import { cores } from "../modificadores/atributos/cores";
import { estilos } from "../modificadores/atributos/estilo";
import { valoresGerais} from "../modificadores/atributos/gerais";
import { valoresGlobais } from "../modificadores/atributos/globais";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class EstiloPadrao extends Pseudoclasse {

    valoresAceitos: { [valorFoles: string]: string } = {
        
        "estilo-padrão": "default",
        "estilo-padrao": "default",
       
    }
    
    constructor(valor: string, quantificador?: string, pragmas?: PragmasPseudoclasse) {
        super("estilo-padrão", "default");

        if (Number.isNaN(parseInt(valor)) &&

            !(valor in this.valoresAceitos) &&
            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'estilo-padrão' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'estilo-padrão' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}