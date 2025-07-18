import { Valor } from "../../valores";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { valoresGlobais } from "../atributos/globais";

export function validarValores(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos: { [valorFoles: string]: string },
    valoresExtra?: string[],
) {
    // TODO: Repensar.
    // if (valoresExtra === undefined) {
    //     if (!(metodoResolvido in valoresAceitos) && !(metodoResolvido in valoresGlobais)) {
    //         throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
    //         ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
    //         ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
    //     }
    // } else {
    //     let metodoValido = false;
    //     for (let index = 0; index < valoresExtra.length; index++) {
    //         metodoValido = valor === valoresExtra[index];
    //         if (metodoValido) {
    //             break;
    //         }
    //     }
// 
    //     if (
    //         !(metodoResolvido in valoresAceitos) &&
    //         !metodoValido &&
    //         !(metodoResolvido in valoresGlobais)
    //     ) {
    //         throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
    //         ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
    //         ${valoresExtra.reduce((final, atual) => (final += `, ${atual}`))},
    //         ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
    //     }
    // }
}
