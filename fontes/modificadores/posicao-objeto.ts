import { valoresGlobais } from "./atributos/globais";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class PosicaoObjeto extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["posicao-objeto", "posição-objeto"], "object-position");

        // OBS.: Também pode receber DOIS números com quantificador como parâmetro
        // Ex.: posicao-objeto: 25% 75%;

        // Porém, essa validação inicial cobre somente as posições e os valores globais
        if (!(valor in posicoesBasicas) && !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'posição-objeto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(posicoesBasicas).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Quantificador fica inutilizado no momento
        // this.quantificador = quantificador;
    }
}
