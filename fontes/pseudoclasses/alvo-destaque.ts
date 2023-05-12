import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class AlvoDestaque extends Pseudoclasse {

    constructor(pragmas?: PragmasPseudoclasse) {
        super("alvo-destaque", "target-within", pragmas);
    }
}