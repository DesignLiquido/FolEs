import { Valor, ValorQualitativo } from "../../valores";
import { valoresGlobais } from "../atributos/globais";

export function validarValoresAdicionais(
    nomePropriedade: string,
    valores: Valor[],
    valoresAdicionais: { [valorFoles: string]: string },
    valoresAceitos?: { [valorFoles: string]: string },
) {
    const valorTipado = valores[0] as ValorQualitativo;
    const valorModificador: string | number = valorTipado.qualitativo;

    let valoresCss: Array<string | number> = [];
    if (valoresAceitos) {
        valoresCss = Object.values(valoresAceitos);
    }
    const valoresGlobaisCss: Array<string> = Object.values(valoresGlobais);
    valoresGlobaisCss.forEach((valor) => valoresCss.push(valor));

    if (valoresAceitos !== null) {
        if (
            !(valorModificador in valoresAdicionais) &&
            !(valorModificador in valoresAceitos) &&
            !(valoresCss.includes(valorModificador)) &&
            !(valorModificador in valoresGlobais)
        ) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores FolEs aceitos:
            ${Object.keys(valoresAdicionais).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
            
            Valores CSS aceitos:
            ${valoresCss.reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    } else {
        if (
            !(valorModificador in valoresAdicionais) &&
            !(valoresCss.includes(valorModificador)) &&
            !(valorModificador in valoresGlobais)
        ) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores FolEs aceitos: 
            ${Object.keys(valoresAdicionais).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
            
            Valores CSS aceitos:
            ${valoresCss.reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }
}
