import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DesignTabela extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        fixo: "fixed",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("design-tabela", "table-layout", pragmas);

        if (!valorVariavel)
            validarValores("design-tabela", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
