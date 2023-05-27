import { valoresGlobais } from "../atributos/globais";
import { estilos } from "../atributos/estilo";
import { Modificador } from "../superclasse/modificador";

export class  Futuro extends Modificador {

  

    constructor(valor: string, quantificador?: string) {
        super("futuro", "future");

        if (!(valor in estilos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'futuro' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
    }
}
