import { cores } from "../atributos/cores";
import { estilos } from "../atributos/estilo";
import { valoresGlobais} from "../atributos/globais";
import { unidadesMedida } from "../atributos/quantificadores";
import { Modificador } from "../superclasse/modificador";

export class NUltimoTipo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
    "n-ultimo-tipo":"nth-last-of-type",
    "n-último-tipo":"nth-last-of-type",
    }

    constructor(valor: string, quantificador?: string) {
        super("n-ultimo-tipo", "nth-of-type");
     
        if (Number.isNaN(parseInt(valor)) &&
        !(valor in this.valoresAceitos)&&
            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'n-ultimo-tipo' com valor ${valor} inválido. Valores aceitos: 
            
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
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