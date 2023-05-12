import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class FocoVisivel extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("foco-visivel", "focus-visible", pragmas);
    }
}