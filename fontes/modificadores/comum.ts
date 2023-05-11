import { valoresGlobais } from "./atributos/globais";

export function validarValores(nomePropriedade: string, valor: any, valoresAceitos: { [valorFoles: string]: string }) {
    if (!(valor in valoresAceitos) &&
        !(valor in valoresGlobais)
    ) {
        throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
    }
}