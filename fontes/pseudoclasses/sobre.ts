import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Sobre extends Pseudoclasse {
   
    constructor(pragmas?: PragmasPseudoclasse) {
        super("sobre", "hover", pragmas);
    }
}