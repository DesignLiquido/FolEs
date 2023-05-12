import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Atual extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("atual", "current", pragmas);
    }
}
