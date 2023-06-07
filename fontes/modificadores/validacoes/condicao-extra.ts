import { valoresGlobais } from "../atributos/globais";

export function validarValoresAdicionais(
    nomePropriedade: string, 
    valor: any, 
    valoresAdicionais: { [valorFoles: string]: string }, 
    valoresAceitos?: { [valorFoles: string]: string }) {
    if (valoresAceitos !== undefined) {
        if (!(valor in valoresAdicionais) &&
            !(valor in valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(valoresAdicionais).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    } else {
        if (!(valor in valoresAdicionais) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(valoresAdicionais).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    }

}