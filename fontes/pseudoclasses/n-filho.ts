import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class NFilho extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("n-filho", "nth-child", pragmas);
    }
}
