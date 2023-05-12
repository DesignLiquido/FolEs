import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Habilitado extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("habilitado", "enabled", pragmas);
    }
}
