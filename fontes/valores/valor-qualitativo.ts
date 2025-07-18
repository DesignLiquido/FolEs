import { Valor } from "./valor";

export class ValorQualitativo extends Valor {
    qualitativo: string;

    constructor(qualitativo: string) {
        super();
        this.qualitativo = qualitativo;
    }

    paraTexto(): string {
        return `${this.qualitativo}`;
    }
}
