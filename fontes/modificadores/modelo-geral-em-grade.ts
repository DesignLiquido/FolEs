import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModeloGeralEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("modelo-geral-em-grade", "grid-template-areas");

        // OBS.: Também aceita receber valores do tipo string e matriz
        // Ex.: grid-template-areas:
        //      "a b b"
        //      "a c d";

        // TODO: Adaptar lógica para cobrir todos os casos
        validarValores('modelo-geral-em-grade', valor, this.valoresAceitos);
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
