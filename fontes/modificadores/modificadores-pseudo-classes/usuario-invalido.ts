import { cores } from "../atributos/cores";
import { valoresGlobais} from "../atributos/globais";
import { unidadesMedida } from "../atributos/quantificadores";
import { Modificador } from "../superclasse/modificador";

export class UsuarioInvalido extends Modificador {

    valoresAceitos: { [valorFoles: string]: string } = {
        
        "usuário-inválido": "user-invalid",
        "usuario-invalido": "user-invalid",
       
    }
    
    constructor(valor: string, quantificador?: string) {
        super("usuario-invalido", "user-invalid");

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
            throw new Error(`Propriedade 'usuario-invalido' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, 
           
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`usuario-invalido' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}