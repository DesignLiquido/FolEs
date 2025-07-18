import { Valor } from "../../valores";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { cores } from "../atributos/cores";
import { estilos } from "../atributos/estilo";
import { valoresGlobais } from "../atributos/globais";

export function validarMultiplosQualitativos(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos?: { [valorFoles: string]: string },
) {
    // TODO: Repensar
    // const validaçõesCor =
    //     !metodoResolvido.includes("rgb") &&
    //     !metodoResolvido.includes("rgba") &&
    //     !metodoResolvido.includes("hsl") &&
    //     !metodoResolvido.includes("hsla");

    // if (valoresAceitos === undefined) {
    //     if (
    //         validaçõesCor &&
    //         Number.isNaN(parseInt(metodoResolvido)) &&
    //         !(metodoResolvido in estilos) &&
    //         !(metodoResolvido in cores) &&
    //         !(metodoResolvido in valoresGlobais)
    //     ) {
    //         throw new Error(
    //             `Modificador ou variável '${nomePropriedade}' com valor ${metodoResolvido} inválido. Valores aceitos: 
    //             número-quantificador, 
    //             ${Object.keys(estilos).reduce((final, atual) => (final += `, ${atual}`))},
    //             ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},
    //             ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
    //         `);
    //     }
    // } else {
    //     if (
    //         !(metodoResolvido in valoresAceitos) &&
    //         validaçõesCor &&
    //         Number.isNaN(parseInt(metodoResolvido)) &&
    //         !(metodoResolvido in estilos) &&
    //         !(metodoResolvido in cores) &&
    //         !(metodoResolvido in valoresGlobais)
    //     ) {
    //         throw new Error(
    //             `Modificador ou variável '${nomePropriedade}' com valor ${metodoResolvido} inválido. Valores aceitos: 
    //             número-quantificador, 
    //             ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
    //             ${Object.keys(estilos).reduce((final, atual) => (final += `, ${atual}`))},
    //             ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},
    //             ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
    //         `);
    //     }
    // }
}