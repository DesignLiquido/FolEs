import { Valor, ValorNumerico, ValorQualitativo } from "../../valores";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { cores } from "../atributos/cores";
import { estilos } from "../atributos/estilo";
import { valoresGlobais } from "../atributos/globais";
import { validarQuantificador } from "./quantificador";

export function validarMultiplosQualitativos(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos?: { [valorFoles: string]: string },
    quantificadoresAceitos?: { [valorFoles: string]: string },
    quantificadoresAceitos2?: { [valorFoles: string]: string },
) {
    let valorModificador: string | number;
    let valorTipado: any;
    let valorTipoNumerico: boolean = false;
    let valorTipoMetodo: boolean = false;
    if (valores[0] instanceof ValorNumerico) {
        valorModificador = valores[0].literalNumerico;
        valorTipado = valores[0] as ValorNumerico;
        valorTipoNumerico = true;
    } else if (valores[0] instanceof ValorQualitativo) {
        valorModificador = valores[0].qualitativo;
        valorTipado = valores[0] as ValorQualitativo;
    } else if (valores[0] instanceof Metodo || valores[0] instanceof MetodoCss) {
        valorModificador = valores[0].constructor.name.toLowerCase();
        valorTipado = valorModificador;
        valorTipoMetodo = true;
    }

    if (valorTipoNumerico && quantificadoresAceitos && valorTipado.quantificador) {
        if (quantificadoresAceitos2) quantificadoresAceitos = { ...quantificadoresAceitos, ...quantificadoresAceitos2 };

        validarQuantificador(nomePropriedade, valorTipado.quantificador, quantificadoresAceitos);
    }
    
    let validaçõesCor: boolean = true;
    if (valorTipoMetodo) {
        validaçõesCor =   
        !valorTipado.includes("rgb") &&
        !valorTipado.includes("rgba") &&
        !valorTipado.includes("hsl") &&
        !valorTipado.includes("hsla");
    }

    if (valoresAceitos === null) {
        if (
            validaçõesCor &&
            typeof valorModificador !== 'number' &&
            !(valorModificador in estilos) &&
            !(valorModificador in cores) &&
            !(valorModificador in valoresGlobais)
        ) {
            throw new Error(
                `Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos: 
                número-quantificador, 
                ${Object.keys(estilos).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
            `);
        }
    } else {
        if (
            !(valorModificador in valoresAceitos) &&
            validaçõesCor &&
            typeof valorModificador !== 'number' &&
            !(valorModificador in estilos) &&
            !(valorModificador in cores) &&
            !(valorModificador in valoresGlobais)
        ) {
            throw new Error(
                `Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos: 
                número-quantificador, 
                ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(estilos).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},
                ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
            `);
        }
    }
}