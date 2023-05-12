import { Pseudoclasse } from "../pseudoclasses/pseudoclasse";
import { PragmasSeletor } from "./pragmas-seletor";
import { Seletor } from "./seletor";

export class SeletorClasse extends Seletor {
    nomeClasse: string;
    pragmas?: PragmasSeletor;

    constructor(nomeClasse: string, pseudoclasse?: Pseudoclasse, pragmas?: PragmasSeletor) {
        super(pseudoclasse);
        this.nomeClasse = nomeClasse;
        this.pragmas = pragmas;
    }

    paraTexto() {
        let resultado = `.${this.nomeClasse}`;
        if (this.pseudoclasse !== undefined && this.pseudoclasse !== null) {
            resultado += `:${this.pseudoclasse.pseudoclasseCss}`;
        }
        
        return resultado;
    }
}