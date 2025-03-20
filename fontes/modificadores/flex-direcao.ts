import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FlexDirecao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "linha": "row",
        "inverter-linha": "row-reverse",
        "coluna": "column",
        "inverter-coluna": "column-reverse",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["flex-direcao", "flex-direção"], "flex-direction", pragmas);

        if (!valorVariavel) validarValores('flex-direção', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
