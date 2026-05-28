import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DesignTabela extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        fixo: "fixed",
    };

    static nomeCss: string = "table-layout";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("design-tabela", DesignTabela.nomeCss, pragmas);

        if (!variavel) validarValores("design-tabela", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
