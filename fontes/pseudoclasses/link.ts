import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Link extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("link", "link", pragmas);
    }
}
