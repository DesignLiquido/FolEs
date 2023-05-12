import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Pausa extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("pausa", "paused", pragmas);
    }
}
