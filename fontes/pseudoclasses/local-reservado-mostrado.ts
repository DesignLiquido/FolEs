import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class LocalReservadoMostrado extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("local-reservado-mostrado", "placeholder-shown", pragmas);
    }
}
