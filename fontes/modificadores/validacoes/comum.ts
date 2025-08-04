import { Valor, ValorQualitativo } from "../../valores";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { valoresGlobais } from "../atributos/globais";

export function validarValores(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos: { [valorFoles: string]: string },
    valoresExtra?: string[],
) {
    let valorModificador: string | number;
    let valorTipoMetodo: boolean = false;
    let valorTipado: any;

    if (valores[0] instanceof ValorQualitativo) {
        valorTipado = valores[0] as ValorQualitativo;
        valorModificador = valorTipado.qualitativo;
    } else if (valores[0] instanceof Metodo || valores[0] instanceof MetodoCss) {
        valorTipado = valores[0] as Metodo;
        valorModificador = valorTipado.traducao;
        valorTipoMetodo = true;
    }

    if (valoresExtra === null) {
        if (!(valorModificador in valoresAceitos) && !(valorModificador in valoresGlobais)) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos: 
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    } else {
        let metodoValido = false;
        if (valorTipoMetodo) {
            for (let index = 0; index < valoresExtra.length; index++) {
                metodoValido = valorModificador === valoresExtra[index];
                if (metodoValido) {
                    break;
                }
            }
        }

        if (
            !(valorModificador in valoresAceitos) &&
            !metodoValido &&
            !(valorModificador in valoresGlobais)
        ) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos: 
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${valoresExtra.reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }
}
