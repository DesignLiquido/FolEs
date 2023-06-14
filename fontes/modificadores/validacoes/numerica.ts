import { valoresGlobais } from "../atributos/globais";

export function validarValorNumerico(
    nomePropriedade: string, 
    valor: any, 
    valoresAceitos?: { [valorFoles: string]: string }) 
{
    if (valoresAceitos !== undefined) {
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    } else {
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    }
}
