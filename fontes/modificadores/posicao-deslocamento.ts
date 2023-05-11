import { valoresGlobais } from "./atributos/globais";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class PosicaoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["posicao-deslocamento", "posição-deslocamento"], 
            "offset-position"
        );

        // OBS.: Esse modificador está listado como Experimental
        // Atualmente, não há compatibilidade desse seletor com nenhum browser

        // OBS.: Também pode receber DOIS números com quantificador como parâmetro
        // Ex.: posicao-deslocamento: 25% 75%;

        // Porém, essa validação inicial cobre somente as posições e os valores globais
        if (!(valor in this.valoresAceitos) &&
            !(valor in posicoesBasicas) && 
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'posição-deslocamento' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(posicoesBasicas).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;


        // Quantificador fica inutilizado no momento
        // this.quantificador = quantificador;
    }
}
