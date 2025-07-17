import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { valoresGlobais } from "../atributos/globais";

export function validarValores(
    nomePropriedade: string,
    valor: Metodo | MetodoCss | string,
    valoresAceitos: { [valorFoles: string]: string },
    valoresExtra?: string[],
) {
    let metodoResolvido = "";
    if (valor instanceof Metodo) {
        metodoResolvido = valor.traducao;
    } else if (valor instanceof MetodoCss) {
        metodoResolvido = valor.traducao;
    } else {
        metodoResolvido = valor;
    }
    
    if (valoresExtra === undefined) {
        if (!(metodoResolvido in valoresAceitos) && !(metodoResolvido in valoresGlobais)) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    } else {
        let metodoValido = false;
        for (let index = 0; index < valoresExtra.length; index++) {
            metodoValido = valor === valoresExtra[index];
            if (metodoValido) {
                break;
            }
        }

        if (
            !(metodoResolvido in valoresAceitos) &&
            !metodoValido &&
            !(metodoResolvido in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${valoresExtra.reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }
}
