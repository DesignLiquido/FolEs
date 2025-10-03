import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModeloGeralEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("modelo-geral-em-grade", "grid-template-areas", pragmas);

        // OBS.: Também aceita receber valores do tipo string e matriz
        // Ex.: grid-template-areas:
        //      "a b b"
        //      "a c d";

        if (!variavel) validarValores("modelo-geral-em-grade", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
