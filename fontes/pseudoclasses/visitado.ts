import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Visitado extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("visitado", "visited", pragmas);
    }
}
