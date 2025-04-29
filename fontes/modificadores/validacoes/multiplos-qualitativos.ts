import { cores } from "../atributos/cores";
import { estilos } from "../atributos/estilo";
import { valoresGlobais } from "../atributos/globais";

export function validarMultiplosQualitativos(
    nomePropriedade: string,
    valor: any,
    valoresAceitos: { [valorFoles: string]: string },
    valoresExtra?: any,
) {
    const valorString = valor.toString();

    const validaçõesCor =
        !valorString.includes("rgb") &&
        !valorString.includes("rgba") &&
        !valorString.includes("hsl") &&
        !valorString.includes("hsla");

    const validaçõesHEX = !(
        valorString.startsWith("#") && valorString.length <= 7
    );

    if (valoresExtra === undefined) {
        if (
            !(valor in valoresAceitos) &&
            validaçõesCor &&
            validaçõesHEX &&
            Number.isNaN(parseInt(valor)) &&
            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
                número-quantificador, 
                ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(estilos).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
            `);
        }
    } else {
        let metodoValido = false;
        for (let index = 0; index < valoresExtra.length; index++) {
            if (metodoValido === false) {
                metodoValido = valor["traducao"] === valoresExtra[index];
            }
        }

        if (
            !(valor in valoresAceitos) &&
            !metodoValido &&
            validaçõesCor &&
            validaçõesHEX &&
            Number.isNaN(parseInt(valor)) &&
            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
                número-quantificador, 
                ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(estilos).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
            `);
        }
    }
}