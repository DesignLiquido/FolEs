import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class EstiloPadrao extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("estilo-padrão", "default", pragmas);
    }
}