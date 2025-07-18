import { Valor } from "./valor";

export class ValorVirgula extends Valor {
    paraTexto(): string {
        return ",";
    }
}
