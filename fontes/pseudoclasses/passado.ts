import { valoresGlobais } from "../modificadores/atributos/globais";
import { estilos } from "../modificadores/atributos/estilo";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Passado extends Pseudoclasse {

  

    constructor(pragmas?: PragmasPseudoclasse) {
        super("passado", "past");

        if (!(valor in estilos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'passado' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
    }
}
