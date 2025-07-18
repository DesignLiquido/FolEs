export function proibirQuantificador(
    nomeModificadorOuVariavel: string,
    quantificador: string,
) {
    if (quantificador !== undefined) {
        throw new Error(
            `Modificador ou variável '${nomeModificadorOuVariavel}' aceita somente valores numéricos. O quantificador '${quantificador}' é inválido para esta operação.`,
        );
    }
}
