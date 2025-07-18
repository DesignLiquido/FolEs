import { proibirQuantificador } from "../modificadores/validacoes/proibir-quantificador";
import { Valor } from "./valor";

export class ValorNumerico extends Valor {
    literalNumerico: number;
    quantificador?: string;

    constructor(nomeModificador: string, literalNumerico: number, quantificador?: string) {
        super();
        this.literalNumerico = literalNumerico;
        // if (quantificador) proibirQuantificador(nomeModificador, quantificador);
        this.quantificador = quantificador;
    }

    paraTexto(): string {
        let resultado = `${this.literalNumerico}`;
        if (this.quantificador) {
            resultado += this.quantificador;
        }

        return resultado;
    }
}
