import { Valor } from "../../valores";
import { HexadecimalCor } from "../../valores/metodos/foles/hexadecimal-cor";
import { cores } from "../atributos/cores";
import { valoresGlobais } from "../atributos/globais";
import { capturarValor } from "./capturar-valor";

export function validarValorCor(
    nomePropriedade: string,
    valores: Valor | Valor[],
    valoresAceitos?: { [valorFoles: string]: string },
) {
    const valorModificador: { valor: string | number, metodo: boolean, numerico: boolean } = capturarValor(valores);

    if (valorModificador.metodo) {
        if (valores[0] instanceof HexadecimalCor) {
            if (valores[0]["codigo"].length !== 3 && valores[0]["codigo"].length !== 6) {
                throw new Error(
                    `Modificador ou variável '${nomePropriedade}' com hexadecimal inválido: '${valores[0]["codigo"]}'. Hexadecimais
                    devem ter 3 ou 6 caracteres após a cerquilha, sendo cada caracter de 0 até 9 ou de A até F.`,
                );
            }
        } else if (
            !["rgb", "rgba", "hsl", "hsla"].includes(
                valores[0].constructor.name.toLowerCase(),
            )
        ) {
            throw new Error(
                `Modificador ou variável '${nomePropriedade}' com método '${valores[0].constructor.name}' inválido. Valores aceitos:
                rgb(), rgba(), hsl(), hsla().`,
            );
        }
    } else {
        if (valoresAceitos === null) {
            if (!(valorModificador.valor in cores) && !(valorModificador.valor in valoresGlobais)) {
                throw new Error(
                    `Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores aceitos:
                    ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},    
                    ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`,
                );
            }
        } else {
            if (
                !(valorModificador.valor in cores) &&
                !(valorModificador.valor in valoresAceitos) &&
                !(valorModificador.valor in valoresGlobais)
            ) {
                throw new Error(
                    `Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores aceitos:
                    ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},    
                    ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
                    ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`,
                );
            }
        }
    }
}
