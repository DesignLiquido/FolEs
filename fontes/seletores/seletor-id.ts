import { PragmasSeletor } from "./pragmas-seletor";
import { Seletor } from "./seletor";

export class SeletorId extends Seletor {
    id: string;
    pragmas?: PragmasSeletor;

    constructor(id: string, pragmas?: PragmasSeletor) {
        super();
        this.id = id;
        this.pragmas = pragmas;
    }

    paraTexto() {
        return `#${this.id}`;
    }
}