import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class LinkLocal extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("link-local", "local-link", pragmas);
    }
}
