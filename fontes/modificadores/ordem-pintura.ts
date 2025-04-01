import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrdemPintura extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "tracado": "stroke",
        "traçado": "stroke",
        "preencher": "fill",
        "marcadores": "markers",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("ordem-pintura", "paint-order", pragmas);

        if (!valorVariavel) validarValores('ordem-pintura', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
