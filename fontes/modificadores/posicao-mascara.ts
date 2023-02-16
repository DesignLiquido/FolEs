import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDePosiçõesBasicas } from "./atributos/posição";
import { Modificador } from "./superclasse/modificador";

export class PosicaoMascara extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(["posicao-mascara", "posição-máscara"], "mask-position");

        // OBS.: Também pode receber DOIS números com quantificador como parâmetro
        // Ex.: posicao-mascara: 25% 75%;

        // Porém, essa validação inicial cobre somente as posições e os valores globais
        if (!(valor in ListaDePosiçõesBasicas) && !(valor in listaDeValoresGlobais)) {
            throw new Error(`Propriedade 'posição-máscara' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(ListaDePosiçõesBasicas).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Quantificador fica inutilizado no momento
        // this.quantificador = quantificador;
    }
}
