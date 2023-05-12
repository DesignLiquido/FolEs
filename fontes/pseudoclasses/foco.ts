import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Foco extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("foco", "focus", pragmas);
    }
}
