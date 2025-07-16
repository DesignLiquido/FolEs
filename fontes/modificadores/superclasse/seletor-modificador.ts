import { DicionarioModificadores } from "../dicionario/dicionario-modificadores";
import { PragmasModificador } from "../../modificadores/superclasse";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";

export class SeletorModificador {
    constructor(
        nomeFolEs: string,
        valor: Metodo | MetodoCss | string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        const modificador = DicionarioModificadores[nomeFolEs];
        if (modificador === undefined || modificador === null) {
            throw new Error(`O seletor \'${nomeFolEs}\' não existe.`);
        }

        return new modificador(valor, quantificador, pragmas, valorVariavel);
    }
}
