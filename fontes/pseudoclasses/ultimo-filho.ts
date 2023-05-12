import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class UltimoFilho extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("ultimo-filho", "last-child", pragmas);
    }
}
