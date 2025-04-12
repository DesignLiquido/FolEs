import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RecursosFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("recursos-fonte", "font-feature-settings", pragmas);

        if (!valorVariavel)
            validarValores("recursos-fonte", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
