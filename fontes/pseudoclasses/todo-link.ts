import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class TodoLink extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("todo-link", "any-link", pragmas);
    }
}