import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FixarFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fixo: "fixed",
        local: "local",
        rolar: "scroll",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("fixar-fundo", "background-attachment", pragmas);

        if (!valorVariavel)
            validarValores("fixar-fundo", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
