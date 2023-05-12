import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Obrigatorio extends Pseudoclasse {    
    constructor(pragmas?: PragmasPseudoclasse) {
        super("obrigatorio", "required", pragmas);
    }
}
