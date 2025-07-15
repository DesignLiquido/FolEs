import { valoresGlobais } from "../atributos/globais";

export function validarValores(
    nomePropriedade: string,
    valor: string,
    valoresAceitos: { [valorFoles: string]: string },
    valoresExtra?: string[],
) {
    if (valoresExtra === undefined) {
        if (!(valor in valoresAceitos) && !(valor in valoresGlobais)) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    } else {
        let metodoValido = false;
        for (let index = 0; index < valoresExtra.length; index++) {
            metodoValido = valor === valoresExtra[index];
            if (metodoValido) {
                break;
            }
        }

        if (
            !(valor in valoresAceitos) &&
            !metodoValido &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${valoresExtra.reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }
}
