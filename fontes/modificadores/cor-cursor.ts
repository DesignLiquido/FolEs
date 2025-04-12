import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorCursor extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("cor-cursor", "caret-color", pragmas);

        if (!valorVariavel)
            validarValorCor("cor-cursor", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
