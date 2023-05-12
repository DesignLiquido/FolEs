import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Vazio extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("vazio", "empty", pragmas);
    }
}
