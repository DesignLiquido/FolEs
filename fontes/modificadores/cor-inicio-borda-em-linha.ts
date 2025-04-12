import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorInicioBordaEmLinha extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["cor-inicio-borda-em-linha", "cor-início-borda-em-linha"],
            "border-inline-start-color",
            pragmas,
        );

        if (!valorVariavel) validarValorCor("cor-início-borda-em-linha", valor);

        this.valor = valor;
    }
}
