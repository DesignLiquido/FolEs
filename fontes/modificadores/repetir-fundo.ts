import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RepetirFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        "repetir": "repeat",
        "espacar": "space",
        "espaçar": "space",
        "completar": "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("repetir-fundo", "background-repeat", pragmas);

        if (!valorVariavel) validarValores('repetir-fundo', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
