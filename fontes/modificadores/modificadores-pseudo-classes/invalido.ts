import { cores } from "../atributos/cores";
import { valoresGerais} from "../atributos/gerais";
import { unidadesMedida } from "../atributos/quantificadores";
import { Modificador } from "../superclasse/modificador";

export class Invalido extends Modificador {

     valoresAceitos: { [valorFoles: string]: string } = {
       
            "inválido": "invalid",
            "invalido": "invalid",
            
        }

    constructor(valor: string, quantificador?: string) {

       
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