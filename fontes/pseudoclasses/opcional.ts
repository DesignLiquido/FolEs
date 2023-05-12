import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Opcional extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("opcional", "optional", pragmas);
    }
}
