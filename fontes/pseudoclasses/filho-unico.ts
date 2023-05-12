import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class FilhoUnico extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("filho-unico", "only-child", pragmas);
    }
}
