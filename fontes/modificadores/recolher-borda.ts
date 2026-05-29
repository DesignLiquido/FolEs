import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RecolherBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        recolher: "collapse",
        separar: "separate",
    };

    static nomeCss: string = "border-collapse";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("recolher-borda", RecolherBorda.nomeCss, pragmas);

        if (!variavel) validarValores("recolher-borda", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
