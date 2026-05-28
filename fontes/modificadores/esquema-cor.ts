import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EsquemaCor extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        claro: "light",
        escuro: "dark",
        apenas: "only",
    };

    static nomeCss: string = "color-scheme";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("esquema-cor", EsquemaCor.nomeCss, pragmas);

        if (!variavel) validarValores("esquema-cor", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
