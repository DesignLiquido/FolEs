import { Valor } from "../../valores";
import { HexadecimalCor } from "../../valores/metodos/foles/hexadecimal-cor";
import { cores } from "../atributos/cores";
import { valoresGlobais } from "../atributos/globais";
import { capturarValor } from "./capturar-valor";

export function validarValorCor(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos?: { [valorFoles: string]: string },
) {
    const valorModificador: { valor: string | number, metodo: boolean, numerico: boolean } = capturarValor(valores);

    const valoresCss: Array<string | number> = Object.values(cores);
    const valoresGlobaisCss: Array<string> = Object.values(valoresGlobais);
    valoresGlobaisCss.forEach((valor) => valoresCss.push(valor));

    if (valorModificador.metodo) {
        if (valores[0] instanceof HexadecimalCor) {
            const codigoHexadecimal = valores[0]["codigo"];
            if (codigoHexadecimal.length !== 3 && codigoHexadecimal.length !== 6 && codigoHexadecimal.length !== 8) {
                throw new Error(
                    `Modificador ou variável '${nomePropriedade}' com hexadecimal inválido: '${codigoHexadecimal}'. Hexadecimais
                    devem ter 3, 6 ou 8 caracteres após a cerquilha, sendo cada caracter de 0 até 9 ou de A até F.`,
                );
            }
        } else if (
            !["rgb", "rgba", "hsl", "hsla"].includes(
                valores[0].constructor.name.toLowerCase(),
            )
        ) {
            throw new Error(
                `Modificador ou variável '${nomePropriedade}' com método '${valores[0].constructor.name}' inválido. Métodos aceitos:
                rgb(), rgba(), hsl(), hsla().`,
            );
        }
    } else {
        if (valoresAceitos === null || valoresAceitos === undefined) {
            if (
                !(valorModificador.valor in cores) &&
                !(valoresCss.includes(valorModificador.valor)) &&
                !(valorModificador.valor in valoresGlobais)
            ) {
                throw new Error(
                    `Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores FolEs aceitos:
                    ${Object.keys(cores).reduce((final, atual) => (final + `, ${atual}`))},
                    ${Object.keys(valoresGlobais).reduce((final, atual) => (final + `, ${atual}`))}.

                    Valores CSS aceitos:
                    ${valoresCss.reduce((final, atual) => (final + `, ${atual}`))}.`,
                );
            }
        } else {
            if (
                !(valorModificador.valor in cores) &&
                !(valoresCss.includes(valorModificador.valor)) &&
                !(valorModificador.valor in valoresAceitos) &&
                !(valorModificador.valor in valoresGlobais)
            ) {
                throw new Error(
                    `Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores FolEs aceitos:
                    ${Object.keys(cores).reduce((final, atual) => (final + `, ${atual}`))},
                    ${Object.keys(valoresAceitos).reduce((final, atual) => (final + `, ${atual}`))},
                    ${Object.keys(valoresGlobais).reduce((final, atual) => (final + `, ${atual}`))}.

                    Valores CSS aceitos:
                    ${valoresCss.reduce((final, atual) => (final + `, ${atual}`))}.`,
                );
            }
        }
    }
}
