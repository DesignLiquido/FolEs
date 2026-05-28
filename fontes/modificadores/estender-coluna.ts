import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstenderColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        todas: "all",
    };

    static nomeCss: string = "column-span";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estender-coluna", EstenderColuna.nomeCss, pragmas);

        if (!variavel) validarValores("estender-coluna", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
