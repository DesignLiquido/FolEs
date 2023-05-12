import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class UsuarioInvalido extends Pseudoclasse {    
    constructor(pragmas?: PragmasPseudoclasse) {
        super("usuario-invalido", "user-invalid", pragmas);
    }
}
