import { Simbolo } from "../../lexador";
import { cores } from "../../modificadores/atributos/cores";

export function tratarValores(
    arrayValores: Array<Simbolo>,
    valoresAceitos?: { [nomeFolEs: string]: string },
): string {
    let traducaoRetorno: string = '';
    const coresFolEs: Array<string> = Object.keys(cores);

    let valoresFolEs: Array<string> = [];
    if (valoresAceitos) valoresFolEs = Object.keys(valoresAceitos);

    arrayValores.forEach((valor, index, array) => {        
        if (valor.tipo === 'NUMERO') {
            if (index === 0) {
                traducaoRetorno += `${valor.lexema}`;
            } else {
                traducaoRetorno += ` ${valor.lexema}`;
            }
        } else if (valoresFolEs.includes(valor.lexema)) {
            if (index === 0) {
                traducaoRetorno += `${valoresAceitos[valor.lexema]}`;
            } else {
                traducaoRetorno += ` ${valoresAceitos[valor.lexema]}`;
            }
        } else if (coresFolEs.includes(valor.lexema)) {
            if (index === 0) {
                traducaoRetorno += `${cores[valor.lexema]}`;
            } else {
                traducaoRetorno += ` ${cores[valor.lexema]}`;
            }
        } else if (valor.tipo === 'QUANTIFICADOR' || valor.tipo === 'VIRGULA') {
            traducaoRetorno += `${valor.lexema}`;
        } else if (valor.tipo === 'PARENTESE_DIREITO') {
            traducaoRetorno += ')';
        } else if (valor.tipo === 'PARENTESE_ESQUERDO') {
            traducaoRetorno += '(';
        } else if (index !== 0 && array[index - 1].lexema === '#') {
            traducaoRetorno += `${valor.lexema}`;
        } else if (index === 0) {
            traducaoRetorno += `${valor.lexema}`;
        } else {
            traducaoRetorno += ` ${valor.lexema}`;
        }
    });

    return traducaoRetorno;
}

export function tratarValoresReversos(
    arrayValores: Array<Simbolo>,
    valoresAceitos?: { [nomeFolEs: string]: string },
): string {
    let traducaoRetorno: string = '';
    const coresCss: Array<string> = Object.values(cores);

    let valoresFolEs: Array<string> = [];
    if (valoresAceitos) valoresFolEs = Object.keys(valoresAceitos);

    arrayValores.forEach((valor, index, array) => {
        if (valor.tipo === 'NUMERO') {
            if (index === 0) {
                traducaoRetorno += `${valor.lexema}`;
            } else {
                traducaoRetorno += ` ${valor.lexema}`;
            }
        } else if (valoresFolEs.includes(valor.lexema)) {
            if (index === 0) {
                traducaoRetorno += `${valoresAceitos[valor.lexema]}`;
            } else {
                traducaoRetorno += ` ${valoresAceitos[valor.lexema]}`;
            }
        } else if (coresCss.includes(valor.lexema)) {
            const corFolEs: string = Object.keys(cores).find(chave => cores[chave] === valor.lexema);
            if (index === 0) {
                traducaoRetorno += `${corFolEs}`;
            } else {
                traducaoRetorno += ` ${corFolEs}`;
            }
        } else if (valor.tipo === 'QUANTIFICADOR' || valor.tipo === 'VIRGULA') {
            traducaoRetorno += `${valor.lexema}`;
        } else if (valor.tipo === 'PARENTESE_DIREITO') {
            traducaoRetorno += ')';
        } else if (valor.tipo === 'PARENTESE_ESQUERDO') {
            traducaoRetorno += '(';
        } else if (index !== 0 && array[index - 1].lexema === '#') {
            traducaoRetorno += `${valor.lexema}`;
        } else if (index === 0) {
            traducaoRetorno += `${valor.lexema}`;
        } else {
            traducaoRetorno += ` ${valor.lexema}`;
        }
    });

    return traducaoRetorno;
}
