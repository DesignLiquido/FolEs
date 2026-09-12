import { DicionarioPseudoClasses } from "./dicionario-pseudoclasses";
import { PragmasPseudoclasse, Pseudoclasse } from "./pseudoclasse";

export class SeletorPseudoclasse {
    constructor(nomeFolEs: string, pragmas?: PragmasPseudoclasse) {
        const pseudoclasse = DicionarioPseudoClasses[nomeFolEs];
        if (pseudoclasse === undefined || pseudoclasse === null) {
            throw new Error(`A pseudoclasse '${nomeFolEs}' não existe.`);
        }

        return new pseudoclasse(pragmas);
    }
}
