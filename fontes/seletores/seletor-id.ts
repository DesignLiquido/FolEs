import { Pseudoclasse } from "../pseudoclasses/pseudoclasse";
import { PragmasSeletor } from "./pragmas-seletor";
import { Seletor } from "./seletor";

export class SeletorId extends Seletor {
    id: string;
    pragmas?: PragmasSeletor;

    constructor(id: string, pseudoclasse?: Pseudoclasse, pragmas?: PragmasSeletor) {
        super(pseudoclasse);
        this.id = id;
        this.pragmas = pragmas;
    }

    paraTexto() {
        let resultado = `#${this.id}`;
        if (this.pseudoclasse !== undefined && this.pseudoclasse !== null) {
            resultado += `:${this.pseudoclasse.pseudoclasseCss}`;
        }

        return resultado;
    }
}