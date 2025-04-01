import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "alfa": "alpha",
        "luminancia": "luminance",
        "luminância": "luminance",
        "fonte-correspondente": "match-source",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["modo-mascara", "modo-máscara"], "mask-mode", pragmas);

        if (!valorVariavel) validarValores('modo-máscara', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
