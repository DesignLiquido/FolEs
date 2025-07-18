import { Valor } from "../../valores";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { valoresGlobais } from "../atributos/globais";

export function validarValorNumerico(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos?: { [valorFoles: string]: string },
    valoresExtra?: any,
) {
    // TODO: Repensar
    // if (valoresAceitos === undefined && valoresExtra === undefined) {
    //     if (Number.isNaN(parseInt(metodoResolvido)) && !(metodoResolvido in valoresGlobais)) {
    //         throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
    //         número-quantificador,
    //         ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
    //     }
    // }

    // if (valoresAceitos !== undefined && valoresExtra === undefined) {
    //     if (
    //         Number.isNaN(parseInt(metodoResolvido)) &&
    //         !(metodoResolvido in valoresAceitos) &&
    //         !(metodoResolvido in valoresGlobais)
    //     ) {
    //         throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${metodoResolvido} inválido. Valores aceitos:
    //         número-quantificador,
    //         ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
    //         ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
    //     }
    // }

    // if (valoresAceitos !== undefined && valoresExtra !== undefined) {
    //     let metodoValido = false;
    //     for (let index = 0; index < valoresExtra.length; index++) {
    //         if (metodoValido === false) {
    //             metodoValido = valor["traducao"] === valoresExtra[index];
    //         }
    //     }

    //     if (
    //         Number.isNaN(parseInt(metodoResolvido)) &&
    //         !(metodoResolvido in valoresAceitos) &&
    //         !metodoValido &&
    //         !(metodoResolvido in valoresGlobais)
    //     ) {
    //         throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${metodoResolvido} inválido. Valores aceitos:
    //         número-quantificador,
    //         ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
    //         ${valoresExtra.reduce((final, atual) => (final += `, ${atual}`))},
    //         ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
    //     }
    // }
}
