import { HexadecimalCor } from "../../valores/metodos/hexadecimal-cor";
import { Metodo } from "../../valores/metodos/metodo";
import { cores } from "../atributos/cores";
import { valoresGlobais } from "../atributos/globais";

export function validarValorCor(
    nomePropriedade: string,
    valor: Metodo | string,
    valoresAceitos?: { [valorFoles: string]: string },
    valoresExtra?: { [valorFoles: string]: string }) {
    if (valor instanceof Metodo) {
        if (valor instanceof HexadecimalCor) {
            if (valor['codigo'].length !== 3 && valor['codigo'].length !== 6) {
                throw new Error(`Propriedade '${nomePropriedade}' com hexadecimal inválido: '${valor['codigo']}'. Hexadecimais
                    devem ter 3 ou 6 caracteres após a cerquilha, sendo cada caracter de 0 até 9 ou de A até F.`);
            }
        } else if (!['rgb', 'rgba', 'hsl', 'hsla'].includes(valor.constructor.name.toLowerCase())) {
            throw new Error(`Propriedade '${nomePropriedade}' com método '${valor.constructor.name}' inválido. Valores aceitos:
                rgb(), rgba(), hsl(), hsla().`);
        }
    } else {
        // Cores pelo nome.
        if (valoresAceitos === undefined) {
            if (valoresExtra === undefined) {
                if (!(valor in cores) && !(valor in valoresGlobais)) {
                    throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
                                        ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},    
                                        ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
                }
            } else {
                if (!(valor in cores) && !(valor in valoresExtra) && !(valor in valoresGlobais)) {
                    throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
                                        ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},    
                                        ${Object.keys(valoresExtra).reduce((final, atual) => final += `, ${atual}`)},
                                        ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
                }
            }
        } else {
            if (valoresExtra === undefined) {
                if (!(valor in cores) && !(valor in valoresAceitos) && !(valor in valoresGlobais)) {
                    throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
                                    ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},    
                                    ${Object.keys(valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                                    ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
                }
            } else {
                if (!(valor in cores) && !(valor in valoresAceitos) && !(valor in valoresExtra) && !(valor in valoresGlobais)) {
                    throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
                                    ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},    
                                    ${Object.keys(valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                                    ${Object.keys(valoresExtra).reduce((final, atual) => final += `, ${atual}`)},
                                    ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
                }
            }
        }
    }
}
