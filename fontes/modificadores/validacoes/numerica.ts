import { Valor, ValorNumerico } from "../../valores";
import { valoresGlobais } from "../atributos/globais";
import { capturarValor } from "./capturar-valor";
import { proibirQuantificador } from "./proibir-quantificador";
import { validarQuantificador } from "./quantificador";

export function validarValorNumerico(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos?: { [valorFoles: string]: string },
    valoresExtra?: any,
    quantificadoresAceitos?: { [valorFoles: string]: string },
    quantificadoresAceitos2?: { [valorFoles: string]: string },
    naoAceitaQuantificador: boolean = false,
) {
    const valorModificador: { valor: string | number, metodo: boolean, numerico: boolean } = capturarValor(valores);

    const valorNumericoTipado = valores[0] as ValorNumerico;
    if (naoAceitaQuantificador && valorModificador.numerico && valorNumericoTipado.quantificador) {
        proibirQuantificador(nomePropriedade, valorNumericoTipado.quantificador);
    }

    if (quantificadoresAceitos && valorModificador.numerico && valorNumericoTipado.quantificador) {
        if (quantificadoresAceitos2) quantificadoresAceitos = { ...quantificadoresAceitos, ...quantificadoresAceitos2 };

        validarQuantificador(nomePropriedade, valorNumericoTipado.quantificador, quantificadoresAceitos);
    }


    if (valoresAceitos === null && valoresExtra === null) {
        if (
            typeof valorModificador.valor !== 'number' && 
            !(valorModificador.valor in valoresGlobais)
        ) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }

    if (valoresAceitos !== null && valoresExtra === null) {
        if (
            typeof valorModificador.valor !== 'number' &&
            !(valorModificador.valor in valoresAceitos) &&
            !(valorModificador.valor in valoresGlobais)
        ) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }

    if (valoresAceitos !== null && valoresExtra !== null) {
        let metodoValido = false;
        if (valorModificador.metodo) {            
            for (let index = 0; index < valoresExtra.length; index++) {
                if (metodoValido === false) {
                    metodoValido = valorModificador.valor === valoresExtra[index];
                }
            }
        }
        
        if (
            typeof valorModificador.valor !== 'number' &&
            !(valorModificador.valor in valoresAceitos) &&
            !metodoValido &&
            !(valorModificador.valor in valoresGlobais)
        ) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${valoresExtra.reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }
}
