import { fontes } from "../atributos/fontes";
import { valoresGlobais } from "../atributos/globais";

export function validarValorFonte(
    nomePropriedade: string,
    valor: any,
    valoresAceitos: { [valorFoles: string]: string },
    valoresExtra?: any,
) {
    if (
        !(valor in fontes) &&
        !(valor in valoresAceitos) &&
        !(valor in valoresGlobais)
    ) {
        throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(fontes).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
        `);
    }
}
