import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Indeterminado extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("indeterminado", "indeterminate", pragmas);
    }
}