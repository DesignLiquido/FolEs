import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class EmBranco extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("em-branco", "blank", pragmas);
    }
}