import { Valor } from "../../valores";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { fontes } from "../atributos/fontes";
import { valoresGlobais } from "../atributos/globais";

export function validarValorFonte(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos: { [valorFoles: string]: string },
    valoresExtra?: any,
) {
    // TODO: Repensar
    // let metodoResolvido = "";
    // if (valor instanceof Metodo) {
    //     metodoResolvido = valor.traducao;
    // } else if (valor instanceof MetodoCss) {
    //     metodoResolvido = valor.traducao;
    // } else {
    //     metodoResolvido = valor;
    // }

    // if (
    //     !(metodoResolvido in fontes) &&
    //     !(metodoResolvido in valoresAceitos) &&
    //     !(metodoResolvido in valoresGlobais)
    // ) {
    //     throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valor} inválido. Valores aceitos:
    //         ${Object.keys(fontes).reduce((final, atual) => (final += `, ${atual}`))},
    //         ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
    //         ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
    //     `);
    // }
}
