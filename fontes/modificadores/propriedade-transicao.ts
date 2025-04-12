import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PropriedadeTransicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        todas: "all",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["propriedade-transicao", "propriedade-transição"],
            "transition-property",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("propriedade-transição", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
