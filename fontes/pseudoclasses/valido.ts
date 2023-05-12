import { cores } from "../modificadores/atributos/cores";
import { estilos } from "../modificadores/atributos/estilo";
import { valoresGlobais} from "../modificadores/atributos/globais";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Valido extends Pseudoclasse {

    valoresAceitos: { [valorFoles: string]: string } = {
       
        "válido": "valid",
        "valido": "valid",
        
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasPseudoclasse) {
        super("valido", "valid");


        const valorString = valor.toString();

        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX = !(valorString.startsWith('#') && valorString.length <= 7);

        if (Number.isNaN(parseInt(valor)) &&
            validaçõesCor &&
            validaçõesHEX &&
            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`valido' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'valido' com quantificador inválido. Valores aceitos:
                número-quantificador, 
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}