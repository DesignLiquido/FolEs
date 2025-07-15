import { Valor } from "../../valor";

export abstract class MetodoCss extends Valor {
    traducao: string;
    abstract paraTexto(): string;
}
