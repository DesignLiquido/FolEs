import { Valor } from "../../valores";
import { valoresGlobais } from "../atributos/globais";

export function validarValoresAdicionais(
    nomePropriedade: string,
    valores: Valor[],
    valoresAdicionais: { [valorFoles: string]: string },
    valoresAceitos?: { [valorFoles: string]: string },
) {
    // TODO: Repensar
    // if (valoresAceitos !== undefined) {
    //     if (
    //         !(metodoResolvido in valoresAdicionais) &&
    //         !(metodoResolvido in valoresAceitos) &&
    //         !(metodoResolvido in valoresGlobais)
    //     ) {
    //         throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
    //         ${Object.keys(valoresAdicionais).reduce((final, atual) => (final += `, ${atual}`))},
    //         ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
    //         ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
    //     }
    // } else {
    //     if (!(metodoResolvido in valoresAdicionais) && !(metodoResolvido in valoresGlobais)) {
    //         throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
    //         ${Object.keys(valoresAdicionais).reduce((final, atual) => (final += `, ${atual}`))},
    //         ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
    //     }
    // }
}
