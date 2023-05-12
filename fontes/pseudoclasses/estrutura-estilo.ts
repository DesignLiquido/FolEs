import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class EstruturaEstilo extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("estrutura-estilo", "root", pragmas);
    }
}