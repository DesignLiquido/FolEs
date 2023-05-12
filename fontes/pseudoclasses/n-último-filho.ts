import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class NUltimoFilho extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("n-último-filho", "nth-last-child", pragmas);
    }
}
