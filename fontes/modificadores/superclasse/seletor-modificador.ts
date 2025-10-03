import { DicionarioModificadores } from "../dicionario/dicionario-modificadores";
import { PragmasModificador } from "../../modificadores/superclasse";
import { Valor } from "../../valores";

export class SeletorModificador {
    constructor(
        nomeFolEs: string,
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel: boolean = false,
    ) {
        const modificador = DicionarioModificadores[nomeFolEs];
        if (modificador === undefined || modificador === null) {
            throw new Error(`O seletor \'${nomeFolEs}\' não existe.`);
        }

        return new modificador(valores, pragmas, variavel);
    }
}
