import { Valor, ValorQualitativo } from "../../valores";
import { valoresGlobais } from "../atributos/globais";

export function validarValoresAdicionais(
    nomePropriedade: string,
    valores: Valor | Valor[],
    valoresAdicionais: { [valorFoles: string]: string },
    valoresAceitos?: { [valorFoles: string]: string },
) {
    const valorTipado = valores[0] as ValorQualitativo;
    const valorModificador: string | number = valorTipado.qualitativo;

    if (valoresAceitos !== null) {
        if (
            !(valorModificador in valoresAdicionais) &&
            !(valorModificador in valoresAceitos) &&
            !(valorModificador in valoresGlobais)
        ) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos:
            ${Object.keys(valoresAdicionais).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    } else {
        if (!(valorModificador in valoresAdicionais) && !(valorModificador in valoresGlobais)) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos: 
            ${Object.keys(valoresAdicionais).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }
}
