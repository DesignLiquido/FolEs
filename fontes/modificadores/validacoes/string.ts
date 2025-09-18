import { ValorTexto } from "../../valores";

export function validarValorString(valor: ValorTexto) {
    return valor.literalTexto.includes("'") || valor.literalTexto.includes('"');
}
