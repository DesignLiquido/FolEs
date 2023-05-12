import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Passado extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("passado", "past", pragmas);
    }
}
