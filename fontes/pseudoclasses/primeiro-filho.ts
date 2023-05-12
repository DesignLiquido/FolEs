import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class PrimeiroFilho extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("primeiro-filho", "first-child", pragmas);
    }
}
