import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class FocoInterno extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("foco-interno", "focus-within", pragmas);
    }
}
