import { Valor, ValorQualitativo } from "../../valores";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { HexadecimalCor } from "../../valores/metodos/foles/hexadecimal-cor";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { cores } from "../atributos/cores";
import { valoresGlobais } from "../atributos/globais";

export function validarValorCor(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos?: { [valorFoles: string]: string },
) {
    let valorModificador: string | number;
    let valorTipoMetodo: boolean = false;
    let valorTipado: any;

    if (valores[0] instanceof ValorQualitativo) {
        valorTipado = valores[0] as ValorQualitativo;
        valorModificador = valorTipado.qualitativo;
    } else if (valores[0] instanceof Metodo || valores[0] instanceof MetodoCss) {
        valorTipado = valores[0] as Metodo;
        valorModificador = valorTipado;
        valorTipoMetodo = true;
    }

    if (valorTipoMetodo) {
        if (valorTipado instanceof HexadecimalCor) {
            if (valorModificador["codigo"].length !== 3 && valorModificador["codigo"].length !== 6) {
                throw new Error(
                    `Modificador ou variável '${nomePropriedade}' com hexadecimal inválido: '${valorModificador["codigo"]}'. Hexadecimais
                    devem ter 3 ou 6 caracteres após a cerquilha, sendo cada caracter de 0 até 9 ou de A até F.`,
                );
            }
        } else if (
            !["rgb", "rgba", "hsl", "hsla"].includes(
                valorModificador.constructor.name.toLowerCase(),
            )
        ) {
            throw new Error(
                `Modificador ou variável '${nomePropriedade}' com método '${valorModificador.constructor.name}' inválido. Valores aceitos:
                rgb(), rgba(), hsl(), hsla().`,
            );
        }
    } else {
        if (valoresAceitos === null) {
            if (!(valorModificador in cores) && !(valorModificador in valoresGlobais)) {
                throw new Error(
                    `Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos:
                    ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},    
                    ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`,
                );
            }
        } else {
            if (
                !(valorModificador in cores) &&
                !(valorModificador in valoresAceitos) &&
                !(valorModificador in valoresGlobais)
            ) {
                throw new Error(
                    `Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos:
                    ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},    
                    ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
                    ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`,
                );
            }
        }
    }
}
