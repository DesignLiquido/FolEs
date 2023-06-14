import { cores } from "../atributos/cores";
import { valoresGlobais } from "../atributos/globais";

export function validarValorCor(
    nomePropriedade: string,
    valor: any,
    valoresAceitos?: { [valorFoles: string]: string },
    valoresExtra?: { [valorFoles: string]: string }) 
{
    // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
    // A constante abaixo é criada para não ocorrer esse problema.
    const valorString = valor.toString();

    const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
        !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

    const validaçõesHEX = !(valorString.startsWith('#') && valorString.length <= 7);

    if (valoresAceitos === undefined && valoresExtra === undefined) {
        if (!(valor in cores) &&
            validaçõesCor &&
            validaçõesHEX &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            rgb(), rgba(), hsl(), hsla(), #hex, 
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},    
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    } 

    if (valoresAceitos === undefined && valoresExtra !== undefined) {
        if (!(valor in cores) &&
            validaçõesCor &&
            validaçõesHEX &&
            !(valor in valoresExtra) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            rgb(), rgba(), hsl(), hsla(), #hex, 
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},    
            ${Object.keys(valoresExtra).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    }

    if (valoresAceitos !== undefined && valoresExtra === undefined) {
        if (!(valor in cores) &&
            validaçõesCor &&
            validaçõesHEX &&
            !(valor in valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            rgb(), rgba(), hsl(), hsla(), #hex, 
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},    
            ${Object.keys(valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    }

    if (valoresAceitos !== undefined && valoresExtra !== undefined) {
        if (!(valor in cores) &&
            validaçõesCor &&
            validaçõesHEX &&
            !(valor in valoresAceitos) &&
            !(valor in valoresExtra) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            rgb(), rgba(), hsl(), hsla(), #hex, 
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},    
            ${Object.keys(valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresExtra).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    } 
}