export function validarQuantificador(
    nomePropriedade: string,
    quantificador: string,
    quantificadoresAceitos: { [valorFoles: string]: string },
) {
    if (
        !(quantificador in quantificadoresAceitos) ||
        quantificador === undefined
    ) {
        throw new Error(`Modificador ou variável '${nomePropriedade}' com quantificador inválido. Valores aceitos:
            ${Object.keys(quantificadoresAceitos).reduce((final, atual) => (final += `, ${atual}`))}.`);
    }
}
