import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Invalido extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("invalido", "invalid", pragmas);
    }
}
