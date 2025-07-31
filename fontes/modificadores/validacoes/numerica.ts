import { Valor, ValorNumerico, ValorQualitativo } from "../../valores";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { valoresGlobais } from "../atributos/globais";
import { proibirQuantificador } from "./proibir-quantificador";
import { validarQuantificador } from "./quantificador";

export function validarValorNumerico(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos?: { [valorFoles: string]: string },
    valoresExtra?: any,
    quantificadoresAceitos?: { [valorFoles: string]: string },
    quantificadoresAceitos2?: { [valorFoles: string]: string },
    proibeQuantificador: boolean = false,
) {
    const valorNumericoTipado = valores[0] as ValorNumerico;

    if (proibeQuantificador && valorNumericoTipado.quantificador) {
        proibirQuantificador(nomePropriedade, valorNumericoTipado.quantificador);
    }

    if (quantificadoresAceitos && valorNumericoTipado.quantificador) {
        if (quantificadoresAceitos2) quantificadoresAceitos = { ...quantificadoresAceitos, ...quantificadoresAceitos2 };

        validarQuantificador(nomePropriedade, valorNumericoTipado.quantificador, quantificadoresAceitos);
    }

    let valorModificador: string | number;
    let valorTipoMetodo: boolean = false;
    if (valores[0] instanceof ValorNumerico) {
        valorModificador = valores[0].literalNumerico;
    } else if (valores[0] instanceof ValorQualitativo) {
        valorModificador = valores[0].qualitativo;
    } else if (valores[0] instanceof Metodo || valores[0] instanceof MetodoCss) {
        valorModificador = valores[0].traducao;
        valorTipoMetodo = true;
    }
    
    if (valoresAceitos === null && valoresExtra === null) {
        if (
            typeof valorModificador !== 'number' && 
            !(valorModificador in valoresGlobais)
        ) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }

    if (valoresAceitos !== null && valoresExtra === null) {
        if (
            typeof valorModificador !== 'number' &&
            !(valorModificador in valoresAceitos) &&
            !(valorModificador in valoresGlobais)
        ) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }

    if (valoresAceitos !== null && valoresExtra !== null) {
        let metodoValido = false;
        if (valorTipoMetodo) {            
            for (let index = 0; index < valoresExtra.length; index++) {
                if (metodoValido === false) {
                    metodoValido = valorModificador === valoresExtra[index];
                }
            }
        }
        
        if (
            typeof valorModificador !== 'number' &&
            !(valorModificador in valoresAceitos) &&
            !metodoValido &&
            !(valorModificador in valoresGlobais)
        ) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos:
            número-quantificador,
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${valoresExtra.reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }
}
