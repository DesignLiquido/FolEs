export function validarValorString(valor: string) {
    if (valor.includes("'") || valor.includes('"')) {
        return true;
    }

    return false;
}