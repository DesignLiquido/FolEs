import { DicionarioValores } from "./dicionario-valores";

export class SeletorValor {
    constructor(nomeFolEs: string, valores: any[]) {
        if (
            DicionarioValores[nomeFolEs] === undefined ||
            DicionarioValores[nomeFolEs] === null
        ) {
            throw new Error(`O valor '${nomeFolEs}' não foi encontrado.`);
        }
        return new DicionarioValores[nomeFolEs](...valores);
    }
}
