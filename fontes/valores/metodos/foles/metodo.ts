import { Valor } from "../../valor";

export abstract class Metodo extends Valor {
    traducao: string;
    abstract paraTexto(): string;
}
