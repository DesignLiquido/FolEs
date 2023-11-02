import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Isolamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "isolar": "isolate",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("isolamento", "isolation", pragmas);

        validarValores('isolamento', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
