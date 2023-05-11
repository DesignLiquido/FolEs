import { valoresGlobais } from "../atributos/globais";
import { estilos } from "../atributos/estilo";
import { Modificador } from "../superclasse/modificador";

export class Passado extends Modificador {

  

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
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
