import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class DentroDoLimite extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("dentro-do-limite", "in-range", pragmas);
    }
}