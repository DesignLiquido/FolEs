import { Valor, ValorNumerico } from "../../valores";
import { cores } from "../atributos/cores";
import { estilos } from "../atributos/estilo";
import { valoresGlobais } from "../atributos/globais";
import { capturarValor } from "./capturar-valor";
import { validarQuantificador } from "./quantificador";

export function validarMultiplosQualitativos(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos?: { [valorFoles: string]: string },
    quantificadoresAceitos?: { [valorFoles: string]: string },
    quantificadoresAceitos2?: { [valorFoles: string]: string },
) {
    const valorModificador: { valor: string | number, metodo: boolean, numerico: boolean } = capturarValor(valores);

    const valorTipado = valores[0] as ValorNumerico;
    if (valorModificador.numerico && quantificadoresAceitos && valorTipado.quantificador) {
        if (quantificadoresAceitos2) quantificadoresAceitos = { ...quantificadoresAceitos, ...quantificadoresAceitos2 };

        validarQuantificador(nomePropriedade, valorTipado.quantificador, quantificadoresAceitos);
    }

    let validaçõesCor: boolean = true;
    if (valorModificador.metodo) {
        if (typeof valorModificador.valor === 'string') {
            validaçõesCor =
                !valorModificador.valor.includes("rgb") &&
                !valorModificador.valor.includes("rgba") &&
                !valorModificador.valor.includes("hsl") &&
                !valorModificador.valor.includes("hsla");
        }
    }

    if (valoresAceitos === null) {
        if (
            validaçõesCor &&
            typeof valorModificador.valor !== 'number' &&
            !(valorModificador.valor in estilos) &&
            !(valorModificador.valor in cores) &&
            !(valorModificador.valor in valoresGlobais)
        ) {
            throw new Error(
                `Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores aceitos: 
                número-quantificador, 
                ${Object.keys(estilos).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
            `);
        }
    } else {
        if (
            !(valorModificador.valor in valoresAceitos) &&
            validaçõesCor &&
            typeof valorModificador.valor !== 'number' &&
            !(valorModificador.valor in estilos) &&
            !(valorModificador.valor in cores) &&
            !(valorModificador.valor in valoresGlobais)
        ) {
            throw new Error(
                `Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores aceitos: 
                número-quantificador,
                ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(estilos).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
            `);
        }
    }
}
