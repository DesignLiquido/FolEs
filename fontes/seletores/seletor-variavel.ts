import { Pseudoclasse } from "../pseudoclasses/pseudoclasse";
import { PragmasSeletor } from "./pragmas-seletor";
import { Seletor } from "./seletor";

export class SeletorVariavel extends Seletor {
    nomeVariavel: string;
    valorVariavel: string;
    pragmas?: PragmasSeletor;

    constructor(nomeVariavel: string, valorVariavel: string, pragmas?: PragmasSeletor) {
        super(null, pragmas);
        this.nomeVariavel = nomeVariavel;
        this.valorVariavel = valorVariavel;
    }

    paraTexto() {
        let resultado = `$${this.nomeVariavel}: ${this.valorVariavel}`;
        
        return resultado;
    }
}