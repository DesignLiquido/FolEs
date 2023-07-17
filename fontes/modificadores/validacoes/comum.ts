import { valoresGlobais } from "../atributos/globais";

export function validarValores(
    nomePropriedade: string, 
    valor: any, 
    valoresAceitos: { [valorFoles: string]: string },
    valoresExtra?: any,)
    
{
    if (valoresExtra === undefined) {
        if (!(valor in valoresAceitos) &&
        !(valor in valoresGlobais)
    ) {
        throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
    }
    } else {
        let metodoValido = false;
        for (let index = 0; index < valoresExtra.length; index++) {
            if(metodoValido === false) {
                metodoValido = valor['traducao'] === valoresExtra[index];
            }
        }

        if (
        !(valor in valoresAceitos) &&
        !metodoValido &&
        !(valor in valoresGlobais)
    ) {
        throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${valoresExtra.reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
    }
    }
    
}