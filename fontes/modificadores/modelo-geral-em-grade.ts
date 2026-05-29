import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModeloGeralEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    static nomeCss: string = "grid-template-areas";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("modelo-geral-em-grade", ModeloGeralEmGrade.nomeCss, pragmas);

        // OBS.: Também aceita receber valores do tipo string e matriz
        // Ex.: grid-template-areas:
        //      "a b b"
        //      "a c d";

        if (!variavel) validarValores("modelo-geral-em-grade", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
