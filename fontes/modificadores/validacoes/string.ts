export function validarValorString(valor: string) {
    return valor.includes("'") || valor.includes('"');
}