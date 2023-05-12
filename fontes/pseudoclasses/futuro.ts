import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Futuro extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("futuro", "future", pragmas);
    }
}
