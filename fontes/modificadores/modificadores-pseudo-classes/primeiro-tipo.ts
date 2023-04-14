import { cores } from "../atributos/cores";
import { estilos } from "../atributos/estilo";
import { valoresGlobais} from "../atributos/globais";
import { unidadesMedida } from "../atributos/quantificadores";
import { Modificador } from "../superclasse/modificador";

export class PrimeiroTipo extends Modificador {
 

    constructor(valor: string, quantificador?: string) {
        super("primeiro-tipo", "first-of-type");
     
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'primeiro-tipo' com valor ${valor} inválido. Valores aceitos: 
            
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'primeiro-tipo' com quantificador inválido. Valores aceitos:
                número-quantificador, 
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}