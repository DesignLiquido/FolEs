import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { valoresGlobais } from "../atributos/globais";

export function validarValoresAdicionais(
    nomePropriedade: string,
    valor: Metodo | MetodoCss | string,
    valoresAdicionais: { [valorFoles: string]: string },
    valoresAceitos?: { [valorFoles: string]: string },
) {
    let metodoResolvido = "";
    if (valor instanceof Metodo) {
        metodoResolvido = valor.traducao;
    } else if (valor instanceof MetodoCss) {
        metodoResolvido = valor.traducao;
    } else {
        metodoResolvido = valor;
    }

    if (valoresAceitos !== undefined) {
        if (
            !(metodoResolvido in valoresAdicionais) &&
            !(metodoResolvido in valoresAceitos) &&
            !(metodoResolvido in valoresGlobais)
        ) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(valoresAdicionais).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    } else {
        if (!(metodoResolvido in valoresAdicionais) && !(metodoResolvido in valoresGlobais)) {
            throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(valoresAdicionais).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }
}
