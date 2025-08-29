import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FixarFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fixo: "fixed",
        local: "local",
        rolar: "scroll",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("fixar-fundo", "background-attachment", pragmas);

        if (!variavel) validarValores("fixar-fundo", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
