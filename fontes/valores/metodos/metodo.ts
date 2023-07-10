import { Valor } from "../valor";

export abstract class Metodo extends Valor {
    abstract paraTexto(): string;
}