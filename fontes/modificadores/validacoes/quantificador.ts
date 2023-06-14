export function validarQuantificador(
    nomePropriedade: string,
    quantificador: any,
    quantificadoresAceitos: { [valorFoles: string]: string },
    quantificadoresAceitos2?: any) 
{
    if (quantificadoresAceitos2 === undefined) {
        if (!(quantificador in quantificadoresAceitos) ||
            quantificador === undefined
        ) {
            throw new Error(`Propriedade ${nomePropriedade} com quantificador inválido. Valores aceitos:
            ${Object.keys(quantificadoresAceitos).reduce((final, atual) => final += `, ${atual}`)}.`);
        }
    } else {
        if (!(quantificador in quantificadoresAceitos) ||
            !(quantificador in quantificadoresAceitos2) ||
            quantificador === undefined
        ) {
            throw new Error(`Propriedade ${nomePropriedade} com quantificador inválido. Valores aceitos:
            ${Object.keys(quantificadoresAceitos).reduce((final, atual) => final += `, ${atual}`)}.`);
        }
    }
}
