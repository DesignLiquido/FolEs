import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Isolamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        isolar: "isolate",
    };

    static nomeCss: string = "isolation";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("isolamento", Isolamento.nomeCss, pragmas);

        if (!variavel) validarValores("isolamento", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
