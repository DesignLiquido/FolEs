import { cores } from "../atributos/cores";
import { valoresGlobais} from "../atributos/globais";
import { unidadesMedida } from "../atributos/quantificadores";
import { Modificador, PragmasModificador } from "../superclasse";

export class Obrigatorio extends Modificador {

    valoresAceitos: { [valorFoles: string]: string } = {
        
        "obrigatório": "required",
        "obrigatorio": "required",
       
    }
    
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("obrigatorio", "required");

        const valorString = valor.toString();

        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX = !(valorString.startsWith('#') && valorString.length <= 7);

        if (!(valor in this.valoresAceitos) &&
        validaçõesCor &&
        validaçõesHEX &&
        Number.isNaN(parseInt(valor)) &&
        !(valor in cores) &&
        !(valor in valoresGlobais))  {
            throw new Error(`Propriedade 'obrigatorio' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, 
           
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`obrigatorio' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}