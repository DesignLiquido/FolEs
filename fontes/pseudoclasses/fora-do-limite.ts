import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class ForaDoLimite extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("fora-do-limite", "out-of-range", pragmas);
    }
}