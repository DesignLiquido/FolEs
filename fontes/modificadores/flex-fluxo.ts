import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FlexFluxo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "linha": "row",
        "inverter-linha": "row-reverse",
        "coluna": "column",
        "inverter-coluna": "column-reverse",
        "nao-agrupar": "nowrap",
        "não-agrupar": "nowrap",
        "agrupar": "wrap",
        "inverter-agrupamento": "wrap-reverse",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("flex-fluxo", "flex-flow", pragmas);

        if (!valorVariavel) validarValores('flex-fluxo', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
