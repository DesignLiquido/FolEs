import { Valor } from "./valor";

export class ValorTexto extends Valor {
    literalTexto: string;

    constructor(literalTexto: string) {
        super();
        this.literalTexto = literalTexto;
    }

    paraTexto(): string {
        return `"${this.literalTexto}"`;
    }
}
