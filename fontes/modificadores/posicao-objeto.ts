import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDePosiçõesBasicas } from "./atributos/posição";
import { Modificador } from "./superclasse/modificador";

export class PosicaoObjeto extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(["posicao-objeto", "posição-objeto"], "object-position");

        // OBS.: Também pode receber DOIS números com quantificador como parâmetro
        // Ex.: posicao-objeto: 25% 75%;

        // Porém, essa validação inicial cobre somente as posições e os valores globais
        if (!(valor in ListaDePosiçõesBasicas) && !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'posição-objeto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(ListaDePosiçõesBasicas).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Quantificador fica inutilizado no momento
        // this.quantificador = quantificador;
    }
}

const a = new PosicaoObjeto('centro');
console.log(a);