import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { fontes } from "../atributos/fontes";
import { valoresGlobais } from "../atributos/globais";

export function validarValorFonte(
    nomePropriedade: string,
    valor: Metodo | MetodoCss | string,
    valoresAceitos: { [valorFoles: string]: string },
    valoresExtra?: any,
) {
    let metodoResolvido = "";
    if (valor instanceof Metodo) {
        metodoResolvido = valor.traducao;
    } else if (valor instanceof MetodoCss) {
        metodoResolvido = valor.traducao;
    } else {
        metodoResolvido = valor;
    }

    if (
        !(metodoResolvido in fontes) &&
        !(metodoResolvido in valoresAceitos) &&
        !(metodoResolvido in valoresGlobais)
    ) {
        throw new Error(`Propriedade '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(fontes).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
        `);
    }
}
