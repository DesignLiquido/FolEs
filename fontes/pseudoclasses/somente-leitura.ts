import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class SomenteLeitura extends Pseudoclasse {
   
    constructor(pragmas?: PragmasPseudoclasse) {
        super("somente-leitura", "read-only", pragmas);
    }
}
