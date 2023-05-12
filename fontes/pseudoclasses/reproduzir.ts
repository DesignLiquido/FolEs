import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Reproduzir extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("reproduzir", "playing", pragmas);
    }
}
