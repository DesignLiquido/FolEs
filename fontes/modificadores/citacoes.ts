import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class Citacoes extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["citacoes", "citações"], "quotes", pragmas);

        if (!valorVariavel) {
            const validacaoString = validarValorString(valor);

            if (validacaoString) {
                this.valoresAceitos[valor] = valor;
            }

            validarValores("citações", valor, this.valoresAceitos);
        }

        this.valor = valor;
    }
}
