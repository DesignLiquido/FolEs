import { valoresGlobais } from "../atributos/globais";

export function validarValorNumerico(
    nomePropriedade: string,
    valor: any,
    valoresAceitos?: { [valorFoles: string]: string },
    valoresExtra?: { [valorFoles: string]: string }) 
{
    if (valoresAceitos === undefined && valoresExtra === undefined) {
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    }

    if (valoresAceitos !== undefined && valoresExtra === undefined) {
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    }

    if (valoresAceitos === undefined && valoresExtra !== undefined) {
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresExtra) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresExtra).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    }

    if (valoresAceitos !== undefined && valoresExtra !== undefined) {
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresAceitos) &&
            !(valor in valoresExtra) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresExtra).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    }
}
