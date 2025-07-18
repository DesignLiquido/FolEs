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
        valorVariavel: boolean = false,
    ) {
        super("modelo-geral-em-grade", "grid-template-areas", pragmas);

        // OBS.: Também aceita receber valores do tipo string e matriz
        // Ex.: grid-template-areas:
        //      "a b b"
        //      "a c d";

        if (!valorVariavel)
            validarValores("modelo-geral-em-grade", valores, this.valoresAceitos);
        this.valores = valores;
    }
}
