export function proibirQuantificador(
    nomePropriedade: string,
    quantificador: string) 
{
    if (quantificador !== undefined) {
        throw new Error(
            `Propriedade ${nomePropriedade} aceita somente valores numéricos. O quantificador ${quantificador} é inválido para esta operação.`);
    }
}
