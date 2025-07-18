import { Valor } from "./valor";

export class ReferenciaVariavel extends Valor {
    nomeVariavel: string;

    constructor(nomeVariavel: string) {
        super();
        this.nomeVariavel = nomeVariavel;
    }

    paraTexto(): string {
        throw new Error("Não deveria cair aqui.");
    }
}
